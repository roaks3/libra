import React from 'react';
import logo from '../logo.svg';
import './AppHeader.css';

const AppHeader = () => {
  return (
    <div className="lb-AppHeader">
      <img src={logo} className="lb-AppHeader-logo" alt="logo" />
      <h2>
        Welcome to React
      </h2>
    </div>
  );
};

export default AppHeader;
