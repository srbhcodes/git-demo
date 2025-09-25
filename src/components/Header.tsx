<div>My Company Name</div>import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div>Welcome to our company, i hope you are doing well</div>
    <nav>
  <a href="/">Home</a> | <a href="/about">About</a>
</nav>
    </header>
  );
};

export default Header;

