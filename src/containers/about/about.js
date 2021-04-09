import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const About = ({ history }) => {
  const loginStatus = useSelector((state) => state.session);
  if (!loginStatus.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <article className="centered text-dark w-100 text-center">
      <h2>Watch.it application</h2>
      <p>Created by Bereket A. Beshane</p>
      <button className="d-flex mx-auto bg-dark text-dark mt-3 border p-2" type="button" onClick={history.goBack}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: 'White', fontSize: '25px' }}
        />
        <p className="ml-2 text-white">Go back</p>
      </button>
    </article>
  );
};

About.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default About;
