import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Invoices', path: '/invoices' },
    { name: 'Expenses', path: '/expenses' },
    { name: 'Settings', path: '/settings' }
  ];

  return (
    <div className="sidebar">
      <div className="logo">CashLens</div>
      <nav>
        {menuItems.map((item) => (
          <Link 
            key={item.name} 
            to={item.path} 
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;