<div>Acme Corp</div>import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div>Acme Corp</div>
    <nav>
  <a href="/">Home</a> | <a href="/about">About</a> | <a href="/services">Services</a>
</nav>
    </header>
  );
};

export default Header;

