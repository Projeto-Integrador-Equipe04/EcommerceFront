import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sobre from './components/Sobre'; 
import ListaProdutos from './components/ListaProdutos';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<ListaProdutos />} />
      </Routes>
    </Router>
  );
};

export default App;