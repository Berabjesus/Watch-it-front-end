/* eslint-disable */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {query} from '../../actions/userActions'
import { SpiralSpinner } from 'react-spinners-kit';
import homeCss from './home.module.css';

const Home = () => {
  const userWatchList = useSelector((state) => state.userWatchList);
  const loginStatus = useSelector((state) => state.session);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(query(`bearer ${loginStatus.token}`))
  }, []);
  console.log(userWatchList.data);
  //       <input type="range" name="" id=""/>

  return (
    <>
      {
      userWatchList.loading ? (
        <span className="d-flex flex-column align-items-center centered">
          <SpiralSpinner size={120} frontColor="#42B5E8" loading />
          <p className="h6 font-weight-light mt-3">Logging In...</p>
        </span>
      ) : userWatchList.error !== null ? (
        <span className="text-white centered">
          <h3>Error fetching data, Try again later</h3>
        </span>
      ) : (
        <section className="pt-3">
          <header className='d-flex justify-content-between pb-1'>
            <h4>Hi {loginStatus.username}</h4>
            <Link to="/" className={`${homeCss.userIcon}`}>{loginStatus.username[0]}</Link>
          </header>
        </section>
      )
    }
    </>
  );
};

export default Home;
