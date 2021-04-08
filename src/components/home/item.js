/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import itemCss from './item.module.css';

const Item = ({id,title, date}) => {
  const formated_date = new Date(date)
  const loginStatus = useSelector((state) => state.session);
  return (
    <Link to={`/view/${loginStatus.username}/${id}`} className="card d-flex p-2 mt-1 mb-2 shadow-sm">
      <p>{id}</p>
      <p>{title}</p>
      <p>{formated_date.toDateString()}</p>
    </Link>
  );
}

export default Item;
