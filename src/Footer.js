import './App.css';

import { Link } from 'react-router-dom';
import MailLink from './MailLink';

function Footer() {
  return (
    <div className='vStack'>
      <div className='Footer'>
        <Link className='App-link' to='privacy'>
          Privacy
        </Link>
        <Link className='App-link' to='terms'>
          Terms
        </Link>
        <MailLink />
      </div>
      <p className='copyRightText'>
        &copy; AskJoe {new Date().getFullYear().toString()}
      </p>
    </div>
  );
}

export default Footer;
