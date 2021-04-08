/* eslint-disable */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import itemCss from './item.module.css';

const Item = ({id,title, date}) => {
  let formated_date = new Date(date)
  return (
    <Link to={`/view/${id}`} className="card d-flex p-2 my-1">
      <p>{id}</p>
      <p>{title}</p>
      <p>{formated_date.toDateString()}</p>
    </Link>
  );
}

export default Item;
