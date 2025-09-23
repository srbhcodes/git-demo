import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div>Menu</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
