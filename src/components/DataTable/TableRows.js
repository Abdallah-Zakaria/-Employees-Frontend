import Highlight from 'react-highlighter';
import { Image } from 'react-bootstrap';

const TableRows = ({ employees, request }) => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    const item = employees[i];
    if (i < employees.length) {
      item[request.searchType] = <Highlight style={{ display: 'inline-block' }} matchClass='match' search={request.query ? request.query : ''}>{item[request.searchType]}</Highlight>
      items.push(<tr key={i} style={{ background: 'rgb(200, 200, 200 , 0.1)' }}>
        <td style={{ maxWidth: '5%', width: '5%' }}>{item.id}</td>
        <td style={{ maxWidth: '35%', width: '35%' }}> <Image style={{ marginRight: '8px' }} roundedCircle styles={{ objectFit: 'cover' }} height={'32px'} width={'32px'} src={item.avatar} />{item.name}</td>
        <td style={{ maxWidth: '40%', width: '40%' }}>{item.email} </td>
        <td style={{ maxWidth: '20%', width: '20%' }}>{item.depart_name}</td>
      </tr>)
    } else {
      items.push(
        <tr key={i} >
          <pre></pre>
        </tr>
      )
    }
  }
  return items
}

export default TableRows;
