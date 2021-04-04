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
  if (!loginStatus.isLoggedIn) {
      return <Redirect to="/login" />
  }
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
        <Link to="/" className={`d-flex align-items-center justify-content-center font-weight-bold text-white p-1 ${homeCss.userIcon}`}>{loginStatus.username[0] && loginStatus.username[0].toUpperCase()}</Link>
      </header>
      {
        userWatchList.data && userWatchList.data.length === 0 ? (
          <div className='d-flex flex-column'>
            <em className='h5'>You have no items in your watchlist. Click on the + button to add</em>
            <Link to="/" className={`mt-5 align-self-center d-flex flex-column align-items-center justify-content-center ${homeCss.round_button}`}>
              <p className=" display-2" >+</p>
            </Link>
          </div>
        ) : (
          <div>
            <em className='h6'>You have {userWatchList.data && userWatchList.data.length} items in your watchlist. Click on the + button to add items.</em>
            {
              userWatchList.data && userWatchList.data.map(item => {
                return <Item key={item.id} id={item.id} title={item.title} date={item.date}/>
              })
            }
          </div>
        )
      }
    </section>
    )
  }

};

export default Home;
