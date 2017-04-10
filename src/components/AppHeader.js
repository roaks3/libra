import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './AppHeader.css';

const AppHeader = () => {
  return (
    <div className="lb-AppHeader">
      <img src={logo} className="lb-AppHeader-logo" alt="logo" />
      <h2>
        Libra
      </h2>
      <Link to="/" className="lb-AppHeader-link">
        Budgeting
      </Link>
      <Link to="/analytics" className="lb-AppHeader-link">
        Analytics
      </Link>
    </div>
  );
};

export default AppHeader;
