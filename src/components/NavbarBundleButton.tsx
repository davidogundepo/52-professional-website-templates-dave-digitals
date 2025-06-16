
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBundleButton = () => {
  return (
    <Link 
      to="/bundle" 
      className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      <span className="relative z-10">Full Bundle</span>
      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
        Save $1,129!
      </div>
    </Link>
  );
};

export default NavbarBundleButton;
