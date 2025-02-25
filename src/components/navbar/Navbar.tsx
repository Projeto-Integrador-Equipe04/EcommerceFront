import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#C14600] py-4 px-6 flex justify-between items-center">
      <div className="flex items-center ml-0">
        <Link to="/" className="text-white text-2xl font-bold">
          FoodEats
        </Link>
      </div>

      

      <div className="flex space-x-6">
        <Link to="/" className="text-white text-lg">Home</Link>
        <Link to="/sobre" className="text-white text-lg">Sobre</Link>
      </div>
    </nav>
  );
}

export default Navbar;
