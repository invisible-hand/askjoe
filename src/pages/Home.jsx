import React from 'react';
import down from '../assets/images/ios.png';
import logo from '../assets/images/askjoe.png';
import name from '../assets/images/logo.png';

const Home = () => {
  return (
    <content className='App-header'>
      <img src={name} width='120' className='App-logo' alt='logo' />
      <img src={logo} className='App-logo' alt='logo' />
      <a href='https://apps.apple.com/us/app/askjoe-turbo-gpt-powered-bot/id1669677026'>
        <img
          src={down}
          width='240'
          className='App-logo'
          alt='Apple app store download link'
        />
      </a>
    </content>
  );
};

export default Home;
