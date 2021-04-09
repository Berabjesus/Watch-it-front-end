/* eslint-disable max-len */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import query from '../../actions/userActions';
import Item from '../../components/home/item';
import homeCss from './home.module.css';
import { loginSuccess } from '../../actions/loginAction';
import { getToken, getUsername } from '../../helpers/tokenHandler';
import LoadingIcon from '../../components/common/loadingIcon';

const Home = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.session);
  if (!loginStatus.isLoggedIn) {
    if (getToken()) {
      dispatch(query(getToken()));
      dispatch(loginSuccess({
        status: '202',
        message: 'login success',
        username: getUsername(),
        token: getToken(),
      }));
    } else {
      return <Redirect to="/login" />;
    }
  }
  const userWatchList = useSelector((state) => state.userWatchList);
  React.useEffect(() => {
    if (loginStatus.isLoggedIn) {
      dispatch(query(loginStatus.token));
    }
  }, []);

  if (userWatchList.loading) {
    return (
      <LoadingIcon />
    );
  }
  if (userWatchList.error !== null) {
    return (
      <span className="text-white centered">
        <h3>Error fetching data, Try again later</h3>
      </span>
    );
  }
  return (
    <section className="pt-3">
      <header className="d-flex justify-content-between border-bottom pb-3">
        <h4>{`Hi ${loginStatus.username}`}</h4>
        <Link to="/" className={`d-flex align-items-center justify-content-center font-weight-bold text-white p-1 ${homeCss.userIcon}`}>{loginStatus.username[0] && loginStatus.username[0].toUpperCase()}</Link>
      </header>
      {
        userWatchList.data && userWatchList.data.length === 0 ? (
          <div className="d-flex flex-column">
            <em className="h5">You have no items in your watchlist. Click on the + button to add</em>
            <Link to={`/create/${loginStatus.username}`} className={`mt-5 align-self-center d-flex flex-column align-items-center justify-content-center shadow ${homeCss.round_button}`}>
              <p className=" display-2">+</p>
            </Link>
          </div>
        ) : (
          <div>
            <em className="h6">
              {`You have
              ${userWatchList.data && userWatchList.data.length}
              items in your watchlist. Click on the + button to add items.`}
            </em>
            {
              userWatchList.data && userWatchList.data.map((item, i) => <Item key={item.id} id={item.id} num={i + 1} title={item.title} date={item.date} />)
            }
          </div>
        )
      }
    </section>
  );
};

export default Home;
