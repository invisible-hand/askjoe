import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './Layout';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import TestChat from './pages/TestChat';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/dev0dev1test2test3chat4chat5' element={<TestChat />} />
      </Routes>
    </Layout>
  );
}

export default App;
