/* eslint-disable */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {query} from '../../actions/userActions'
import { SpiralSpinner } from 'react-spinners-kit';
import Item from '../../components/home/item'
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

  if (userWatchList.loading) {
    return (
      <span className="d-flex flex-column align-items-center centered">
          <SpiralSpinner size={120} frontColor="#42B5E8" loading />
          <p className="h6 font-weight-light mt-3">Logging In...</p>
        </span>
    )
  } else if (userWatchList.error !== null) {
    return (
      <span className="text-white centered">
      <h3>Error fetching data, Try again later</h3>
    </span>
    )
  } else {
    return (
      <section className="pt-3">
      <header className='d-flex justify-content-between pb-1 border-bottom pb-3'>
        <h4>Hi {loginStatus.username}</h4>
        <Link to="/" className={`text-center font-weight-bold text-white ${homeCss.userIcon}`}>{loginStatus.username[0]}</Link>
      </header>
      {
        userWatchList.data && userWatchList.data.length === 0 ? (
          <div>
            <h5>You have 0 items</h5>
            <p>add</p>
          </div>
        ) : (
          userWatchList.data && userWatchList.data.map(item => {
            return <Item key={item.id} id={item.id} title={item.title} date={item.date}/>
          })
        )
      }
    </section>
    )
  }

};

export default Home;
