import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Buttons = ({ label1, label2, handleClick }) => (
  <div className="d-flex flex-column align-items-center">
    <button className="btn text-white align-self-center mt-2 bg-theme-2" type="button" onClick={handleClick}>{label1}</button>
    <p className="pt-1">or</p>
    <Link to={`${(label2.split(' ').join('')).toLowerCase()}`} className="text-dark mb-0 btn-link border-bottom border-dark"><p>{label2}</p></Link>
  </div>
);

Buttons.propTypes = {
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Buttons;
