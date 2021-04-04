/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import headerCss from './nav.module.css';

const Header = () => {
  const test = 'testing';
  return (
    <header className={`position-fixed w-100 ${headerCss.zindex}`}>
      <nav className="navbar d-flex justify-content-between py-3 bg-theme-1">
        <Link to="/" className={`d-flex flex-column align-items-center text-white ${headerCss.flex_20}`}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'white', fontSize: '20px' }} />
        </Link>
        <Link to="/" className="h5 text-white mb-0">Watch.it</Link>
        <Link to="/" className={`d-flex flex-column align-items-center text-white ${headerCss.flex_20}`}>
          <FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'white', fontSize: '20px' }} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
