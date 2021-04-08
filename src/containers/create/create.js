/* eslint-disable */

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SpiralSpinner } from 'react-spinners-kit';
import createCSs from './create.module.css';
import { create } from '../../actions/createAction';

const Create = () => {
  const loginStatus = useSelector((state) => state.session);
  const createStatus = useSelector((state) => state.create);
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  const [content, setContent] = React.useState('');
  const [date, setDate] = React.useState('');
  const [animateOnError, setAnimateOnError] = React.useState('');

  React.useEffect(() => {
    if (loginStatus.error) {
      setAnimateOnError(createCSs.shake);
    }
  }, [loginStatus.error]);

  const handleLogin = () => {
    const data = {
      title: title.trim(),
      link: link.trim(),
      content: content.trim(),
      date: date.trim(),
    };
    dispatch(create(data, loginStatus.token));
  };

  if (!loginStatus.isLoggedIn || !loginStatus.token) {
    return <Redirect to="/login" />
  } else if(createStatus.sending) {
    return (
      <span className="d-flex flex-column align-items-center centered">
      <SpiralSpinner size={120} frontColor="#42B5E8" loading />
      <p className="h6 font-weight-light mt-3">Creating...</p>
    </span>
    )
  } else {
    return (
      <section className="d-flex justify-content-center pt-4 vhc-100">
      <fieldset className={`col-9 col-md-6 align-self-start p-3 pb-4 shadow ${createCSs.fieldset} ${animateOnError}`}>
        <form className="d-flex flex-column" method="post">
          <div className="input-group mb-2">
            <label className="w-100" htmlFor="title">
              title
              <input placeholder="title" className="form-control border border-dark" id="title" type="text" onChange={(e) => setTitle(e.target.value)} required />
            </label>
          </div>
          <div className="input-group mb-2">
            <label className="w-100" htmlFor="link">
              link
              <input placeholder="link" className="form-control border border-dark" id="link" type="text" onChange={(e) => setLink(e.target.value)} required />
            </label>
          </div>
          <div className="input-group mb-2">
            <label className="w-100" htmlFor="content">
              Content
              <textarea cols='20' rows='3' placeholder="content" className="form-control border border-dark" id="content" type='text' onChange={(e) => setContent(e.target.value)} required />
            </label>
          </div>
          <div className="input-group mb-2">
            <label className="w-100" htmlFor="date">
              Date
              <input placeholder="date" className="form-control border border-dark" id="date" type="date" onChange={(e) => setDate(e.target.value)} required />
            </label>
          </div>
          {
            createStatus.error && createStatus.error.length > 0 && createStatus.error.map(err => {
              return <em className="h6 text-danger text-decoration-none">{err}</em>
            })
          }
          {
            createStatus.sent && <em className="h6 text-info text-decoration-none text-center">Item created</em>
          }
          <div className="d-flex flex-column align-items-center">
            <button className="btn text-white align-self-center mt-2 bg-theme-2" type="button" onClick={handleLogin}>Add</button>
          </div>
        </form>
      </fieldset>
    </section>

    )
  }


};

export default Create;
