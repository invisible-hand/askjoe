import React from 'react';
import down from '../ios.png';
import logo from '../askjoe.png';
import name from '../logo.png';

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={name} width='120' className='App-logo' alt='logo' />
        <img src={logo} className='App-logo' alt='logo' />
        <img src={down} width='240' className='App-logo' alt='logo' />
      </header>
    </div>
  );
};

export default Home;
