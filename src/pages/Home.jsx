import React from 'react';
import down from '../assets/images/ios.png';
import logo from '../assets/images/askjoe.png';
import name from '../assets/images/logo.png';

const Home = () => {
  return (
    <div className='App'>
      <content className='App-header'>
        <img src={name} width='120' className='App-logo' alt='logo' />
        <img src={logo} className='App-logo' alt='logo' />
        <img
          src={down}
          width='240'
          className='App-logo'
          alt='Apple app store download link'
        />
      </content>
    </div>
  );
};

export default Home;
