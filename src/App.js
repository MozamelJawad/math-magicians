import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

import Home from './components/Home';
import Quote from './components/Quote';
import MainCalculatorContainer from './components/Calculator';
import NotMatch from './components/NotMatch';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<NotMatch />} />
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<MainCalculatorContainer />} />
      <Route path="quote" element={<Quote />} />
    </Route>
  </Routes>
);

export default App;
