import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Maggie's Magic Touch. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-yellow-400 hover:text-yellow-500">Facebook</a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500">Instagram</a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
