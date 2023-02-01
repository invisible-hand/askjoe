import './App.css';

import { Link } from 'react-router-dom';
import MailLink from './MailLink';

function Footer() {
  return (
    <div className='App'>
      <div className='App-header2'>
        <Link className='App-link' to='privacy'>
          Privacy
        </Link>
        &nbsp; &nbsp; &nbsp;
        <Link className='App-link' to='terms'>
          Terms
        </Link>
        &nbsp; &nbsp; &nbsp;
        <MailLink />
        <div className='App-header2'>© AskJoe 2023</div>
      </div>
    </div>
  );
}

export default Footer;
