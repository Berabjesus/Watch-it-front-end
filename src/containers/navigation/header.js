/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import headerCss from './nav.module.css';

const Header = () => {
  const loginStatus = useSelector((state) => state.session);
  return (
    <header className={`position-fixed w-100 ${headerCss.zindex}`}>
      <nav className="navbar d-flex justify-content-between py-3 bg-theme-1">
        {
          loginStatus.isLoggedIn && <Link to={`/create/${loginStatus.username}`} className={`d-flex flex-column align-items-center text-white ${headerCss.flex_20}`}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'white', fontSize: '20px' }} />
        </Link>
        }
        <Link to="/" className="h5 text-white font-weight-bold mb-0 mx-auto">Watch.it</Link>
        {
          loginStatus.isLoggedIn && <Link to="/" className={`d-flex flex-column align-items-center text-white ${headerCss.flex_20}`}>
          <FontAwesomeIcon icon={faSignOutAlt} style={{ color: 'white', fontSize: '20px' }} />
        </Link>
        }
      </nav>
    </header>
  );
};

export default Header;
