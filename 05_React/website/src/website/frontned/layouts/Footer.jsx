import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Responsive container: stacks on mobile, splits into a row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-indigo-600 block mb-1">
              BrandLogo
            </span>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} BrandLogo Inc. All rights reserved.
            </p>
          </div>

          {/* Footer Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-6 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="#support" className="hover:text-indigo-600 transition-colors">Support</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
