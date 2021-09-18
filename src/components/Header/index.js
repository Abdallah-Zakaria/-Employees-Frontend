import { useState, useEffect } from 'react';
import { Navbar, Container , ProgressBar } from 'react-bootstrap';
import { If } from 'react-if';

import './index.scss'

let progressInterval = null;

function Header(props) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    progressInterval = setInterval(() => {
      setProgress(prev => prev + 15);
    }, 130);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
      props.setLoaded(true)
      setTimeout(() => {
        setProgress(prev => prev + 15)
      }, 850)
    }
  }, [progress]);

  return (
    <div>
      <Navbar >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./pwc.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span style={{ fontWeight: 'bold', fontFamily: 'fantasy', color: '#464646' }}>Employees</span>
          </Navbar.Brand>
          <If condition={progress < 110}>
            <ProgressBar style={{ width: '50%' }} animated now={progress} />
          </If>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', color: '#464646', marginRight: '8px' }}> Abdallah Zakaria</span>
            <img
              alt=""
              src="./abdallah-zakaria.jpg"
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
