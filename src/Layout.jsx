import './App.css';

import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div className='App'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
