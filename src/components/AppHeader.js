import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#222',
    color: 'white',
    lineHeight: '2em',
    textAlign: 'center'
  },

  logo: {
    height: '80px'
  },

  link: {
    backgroundColor: '#444',
    color: 'white',
    fontSize: '12px',
    height: '42px',
    letterSpacing: '1px',
    lineHeight: '42px',
    padding: '14px 20px',
    textDecoration: 'none',
    textTransform: 'uppercase',

    ':hover': {
      backgroundColor: '#666'
    }
  }
});

const AppHeader = () => {
  return (
    <div className={css(styles.appHeader)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h2>
        Libra
      </h2>
      <Link to="/" className={css(styles.link)}>
        Budgeting
      </Link>
      <Link to="/analytics" className={css(styles.link)}>
        Analytics
      </Link>
    </div>
  );
};

export default AppHeader;
