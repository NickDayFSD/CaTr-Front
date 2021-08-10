import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <p>
        <Link to={'/list'}>
          <button>List</button>
        </Link>
        <Link to={'/new'}>
          <button>New</button>
        </Link>
      </p>
      <h1>Campaign Tracker</h1>
    </>
  );
};

export default Header;
