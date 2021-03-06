import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({
  id, num, title, date,
}) => {
  const formatedDate = new Date(date);
  const loginStatus = useSelector((state) => state.session);
  return (
    <Link to={`/view/${loginStatus.username}/${id}`} className="card d-flex p-2 mt-1 mb-2 shadow-sm">
      <p className="border-bottom pb-2 mb-2"><strong>{`${num}. ${title}`}</strong></p>
      <p>{formatedDate.toDateString()}</p>
    </Link>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Item;
