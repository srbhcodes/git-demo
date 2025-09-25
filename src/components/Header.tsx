import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div>My Company Name
      </div>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/services">Services</a> | <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

