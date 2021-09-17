/* eslint-disable react/jsx-no-target-blank */
import { Linkedin, Github, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import './index.scss'

function Footer() {
  return (
    <div class="footer">
      <a href='https://www.linkedin.com/in/abdallah-zakaria/' target="_blank">
        <Linkedin className='socialIcons' size='28' />
      </a>
      <a href='https://github.com/Abdallah-Zakaria/' target="_blank">
        <Github className='socialIcons' size='28' />
      </a>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="button-tooltip-2">abdallah.zakaria1996@icloud.com</Tooltip>}
      >
        <EnvelopeFill title="Hello This Will Have Some Value" className='socialIcons' size='28' />
      </OverlayTrigger>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="button-tooltip-2">+962 79 970 7039</Tooltip>}
      >
        <TelephoneFill className='socialIcons' size='28' />
      </OverlayTrigger>

    </div>
  );
}

export default Footer;
