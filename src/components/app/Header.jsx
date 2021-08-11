import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <p>
        <Link to={'/'}>
          <button>List</button>
        </Link>
        <Link to={'/new'}>
          <button>New</button>
        </Link>
      </p>
      <h1>Campaign Tracker</h1>
    </div>
  );
};

export default Header;
