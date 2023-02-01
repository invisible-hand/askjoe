import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './Layout';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
    </Layout>
  );
}

export default App;
