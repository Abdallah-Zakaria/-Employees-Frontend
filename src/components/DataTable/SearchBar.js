import { InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

function SearchBar({ departments, request, setRequest }) {
  return (
    <InputGroup className="mb-3" style={{ marginTop: '1rem' }}>
      <div style={{ width: '82%', alignSelf: 'start', display: 'flex' }}>
        <DropdownButton
          style={{ width: '10%' }}
          className='dropdown-searchtype capitalize'
          variant="outline-secondary"
          title={request.searchType}
          id="input-group-dropdown-2"
          align="start"
          onSelect={(e) => {
            setRequest({ searchType: e, page: 1 })
          }}
        >
          <Dropdown.Item active={request.searchType === 'name' ? true : false} eventKey="name">Name</Dropdown.Item>
          <Dropdown.Item active={request.searchType === 'email' ? true : false} eventKey="email">Email</Dropdown.Item>
        </DropdownButton>
        <InputGroup.Text style={{ width: '5%' }} id="inputGroup-sizing-default"><Search sm='2' /></InputGroup.Text>
        <FormControl
          style={{ borderRadius: '0px', width: '85%', borderLeft: '0px' }}
          onChange={(e) => {
            console.log(e.target.value);
            setRequest({ query: e.target.value === '' ? undefined : e.target.value.replace(/^ + /gm, '').replace(/\s+$/g, ''), page: 1 })
          }}
          aria-label="Text input with dropdown button" />
      </div>
      <div style={{ width: '18%' }}>
        <DropdownButton
          className='dropdown-departments'
          variant="outline-secondary"
          title={request.depart_id ? departments[request.depart_id - 1].name : 'All Departments'}
          id="input-group-dropdown-2"
          align="end"
          onSelect={(e) => {
            setRequest({ depart_id: e === 'all' ? undefined : e, page: 1 })
          }}
        >
          <Dropdown.Item active={request.depart_id == undefined ? true : false} eventKey="all">All</Dropdown.Item>
          <Dropdown.Divider />
          {departments.map((item, index) => {
            return (
              <Dropdown.Item active={request.depart_id == item.depart_id ? true : false} key={index} eventKey={item.depart_id}>{item.name}</Dropdown.Item>
            )
          })}
        </DropdownButton>
      </div>
    </InputGroup>
  );
}

export default SearchBar;
