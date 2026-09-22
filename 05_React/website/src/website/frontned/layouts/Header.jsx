import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="flex flex-col md:flex-row md:justify-between md:h-16 items-center py-4 md:py-0">
          
        
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <span className="text-xl font-bold text-indigo-600 cursor-pointer">
              BrandLogo
            </span>
          </div>

        
          <div className="flex flex-col items-center space-y-3 md:space-y-0 md:flex-row md:space-x-8 text-center w-full md:w-auto">
            <Link to='/' className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors w-full md:w-auto py-1">Home</Link>
            <Link to="/about-us" className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors w-full md:w-auto py-1">About</Link>
            <Link to='/pricing' className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors w-full md:w-auto py-1">Pricing</Link>
            <Link to='/gallery' className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors w-full md:w-auto py-1">Gallery</Link>
            <Link to='/student' className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors w-full md:w-auto py-1">Student</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
