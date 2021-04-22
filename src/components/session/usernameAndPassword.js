import React from 'react';
import PropTypes from 'prop-types';

const UsernameAndPassword = ({ setUsername, setPassword }) => (
  <>
    <div className="input-group mb-2">
      <label className="w-100" htmlFor="username">
        Username
        <input placeholder="Username" className="form-control border border-dark" id="username" type="text" onChange={(e) => setUsername(e.target.value)} required />
      </label>
    </div>
    <div className="input-group mb-2">
      <label className="w-100" htmlFor="password">
        Password
        <input placeholder="Password" className="form-control border border-dark" id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
      </label>
    </div>
  </>
);

UsernameAndPassword.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default UsernameAndPassword;
