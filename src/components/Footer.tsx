
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3">Davedigitals</h3>
            <p className="text-gray-300 max-w-xs">
              Professional website templates for every industry. Pay once, edit easily, and own forever.
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/templates" className="hover:text-green-400 transition-colors">Templates</Link>
              </li>
              <li>
                <Link to="/bundle" className="hover:text-green-400 transition-colors">Full Bundle</Link>
              </li>
              <li>
                <Link to="/how-to-edit" className="hover:text-green-400 transition-colors">How to Edit</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <a href="https://x.com/olludepo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/davidogundepo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:david.oludepo@gmail.com" className="text-white hover:text-green-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Davedigitals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
