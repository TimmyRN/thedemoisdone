import React from 'react';
import logo from '../logo.svg'; // Ensure this path is correct

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10" />
        <nav className="flex space-x-4">
          <a href="#home" className="hover:text-secondary">Home</a>
          <a href="#about" className="hover:text-secondary">About</a>
          <a href="#services" className="hover:text-secondary">Services</a>
          <a href="#contact" className="hover:text-secondary">Contact</a>
        </nav>
        <button className="bg-accent text-primary py-2 px-4 rounded hover:bg-secondary">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
