import superagent from 'superagent';

import TableRows from './TableRows';
import SearchBar from './SearchBar';

import { If, Else, Then } from 'react-if';
import { useState, useEffect, useReducer } from 'react';
import { Table, Pagination, Image } from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';

import './index.scss';

function TableData() {
  const API = process.env.REACT_APP_API;

  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [totalRuslt, setTotalRuslt] = useState(0);
  const [request, setRequest] = useReducer((state, newState) => ({ ...state, ...newState }),
    { page: 1, depart_id: undefined, query: undefined, searchType: 'name' });

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    onUpdate();
  }, [request])

  const onLoad = async () => {
    try {
      const data2 = await superagent.get(`${API}/departments`);
      setDepartments(data2.body.data);
    } catch (e) {
      setNotFound(true);
    }
  }

  const onUpdate = async () => {
    try {
      const data1 = await superagent.get(`${API}/search`).query(request);
      setEmployees(data1.body.data);
      setTotalRuslt(data1.body.count);
      setTotalPages(Math.ceil(data1.body.count / 10));
      setNotFound(false);
    } catch (e) {
      setNotFound(true);
      setTotalPages(1);
      setTotalRuslt(0);
    }
  }

  return (
    <div style={{ width: '75%', alignSelf: 'center', display: 'flex', flexDirection: 'column' }}>
      <SearchBar request={request} departments={departments} setRequest={setRequest} />
      <If condition={notFound}>
        <Then>
          <Image src={'/noResult.png'} style={{ alignSelf: 'center', height: '150px', margin: '150px', marginBottom: '166px' }} />
        </Then>
        <Else>
          <Table style={{ minHeight: '450px' }} hover size="sm" >
            <thead >
              <tr style={{ background: '#D85604', color: 'white' }}>
                <th style={{ maxWidth: '5%', width: '5%' }}>#</th>
                <th style={{ maxWidth: '35%', width: '35%' }}>Name</th>
                <th style={{ maxWidth: '40%', width: '40%' }}>Email</th>
                <th style={{ maxWidth: '20%', width: '20%' }}>Department</th>
              </tr>
            </thead>
            <tbody>
              <TableRows employees={employees} request={request} />
            </tbody>
          </Table>
        </Else>
      </If>
      <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
        <p style={{ minWidth: '30%', color: '#6c757d' }}><span className="label label-default">{totalRuslt} Employees</span></p>
        <Pagination style={{ alignItems: 'center' }}>
          <ChevronLeft className='pageDir' style={{ visibility: request.page === 1 ? 'hidden' : 'visible' }}
            onClick={() => {
              if (request.page > 1) {
                setRequest({ page: request.page - 1 });
              }
            }} />
          <Pagination.Item style={{ minWidth: '120px', textAlign: 'center' }} disabled>{request.page} of {totalPages}</Pagination.Item>
          <ChevronRight className='pageDir' style={{ visibility: request.page === totalPages ? 'hidden' : 'visible' }}
            onClick={() => {
              if (request.page < totalPages) {
                setRequest({ page: request.page + 1 });
              }
            }} />
        </Pagination>
        <p style={{ minWidth: '30%' }}></p>
      </div>
    </div >
  );
}

export default TableData;
