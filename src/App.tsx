import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden bg-[#FEF9E1]">

        <Navbar />

        <main className="flex-grow p-6 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
