import { Navbar, Container } from 'react-bootstrap';

import './index.scss'

function Header() {
  return (
    <div>
      <Navbar >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/pwc.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span style={{ fontWeight: 'bold', fontFamily: 'fantasy', color: '#464646' }}>Employees</span>
          </Navbar.Brand>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', color: '#464646', marginRight: '8px' }}> Abdallah Zakaria</span>
            <img
              alt=""
              src="/abdallah-zakaria.jpg"
              className="d-inline-block align-top"
              width='36px'
              height='36px'
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
