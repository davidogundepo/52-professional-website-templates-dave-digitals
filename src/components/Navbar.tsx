
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menu, x, search, shoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary font-poppins">Dave<span className="text-gray-800">digitals</span></span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/templates" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Templates
              </Link>
              <Link to="/how-to-edit" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                How to Edit
              </Link>
              <Link to="/bundle" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Full Bundle
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <button className="p-2 rounded-full text-gray-600 hover:text-primary transition-colors">
              <search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="p-2 rounded-full text-gray-600 hover:text-primary transition-colors ml-2">
              <shoppingCart className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <x className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/templates"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Templates
            </Link>
            <Link
              to="/how-to-edit"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              How to Edit
            </Link>
            <Link
              to="/bundle"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Full Bundle
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-3 px-3 py-2">
              <button className="p-2 rounded-full text-gray-600 hover:text-primary transition-colors">
                <search className="h-5 w-5" />
              </button>
              <Link to="/cart" className="p-2 rounded-full text-gray-600 hover:text-primary transition-colors">
                <shoppingCart className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
