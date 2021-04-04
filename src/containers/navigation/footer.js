/* eslint-disable */

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faListOl, faChartPie, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import footerCss from './nav.module.css';

const Footer = () => {
  const test = 'testing';
  const loginStatus = useSelector((state) => state.session);

  if (!loginStatus.isLoggedIn) {
    return false
  } else {
    return (
      <footer className={`position-fixed w-100 ${footerCss.footer} ${footerCss.zindex}`}>
        <nav className="navbar d-flex justify-content-between py-3 bg-theme-2">
          <Link to="/" className={`d-flex flex-column align-items-center text-white ${footerCss.flex_20}`}>
            <FontAwesomeIcon icon={faListOl} style={{ color: 'white', fontSize: '25px' }} />
          </Link>
          <Link to="/" className={`d-flex flex-column align-items-center text-white ${footerCss.flex_20}`}>
            <FontAwesomeIcon icon={faChartPie} style={{ color: 'white', fontSize: '25px' }} />
          </Link>
          <Link to="/" className={`d-flex flex-column align-items-center text-white ${footerCss.flex_20}`}>
            <FontAwesomeIcon icon={faInfoCircle} style={{ color: 'white', fontSize: '25px' }} />
          </Link>
        </nav>
      </footer>
    );
  }
};

export default Footer;