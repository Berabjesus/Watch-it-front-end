import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash, faSave, faUndo, faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { update, destroy, reset } from '../../store/actions/viewActions';
import LoadingIcon from '../../components/common/loadingIcon';

const View = () => {
  const loginStatus = useSelector((state) => state.session);
  if (!loginStatus.isLoggedIn) {
    return <Redirect to="/" />;
  }
  const userWatchList = useSelector((state) => state.userWatchList);
  const requestStatus = useSelector((state) => state.status);
  const view = useSelector((state) => state.view);
  const dispatch = useDispatch();

  const { id } = useParams();
  const filteredItem = userWatchList.data.filter((item) => String(item.id) === id)[0];
  const date = (new Date(filteredItem.date)).toDateString();
  const [edit, setEdit] = React.useState(false);
  const [title, setTitle] = React.useState(filteredItem.title);
  const [link, setLink] = React.useState(filteredItem.link);
  const [content, setContent] = React.useState(filteredItem.content);
  const [newdate, setNewDate] = React.useState(filteredItem.date);

  React.useEffect(() => {
    dispatch(reset());
  }, [view.data]);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleEdit = () => {
    if (title || link || content) {
      const data = {
        title: title.trim(),
        link: link.trim(),
        content: content.trim(),
        date: date.trim(),
      };
      dispatch(update(id, data, loginStatus.token));
    }
  };
  const handleDelete = () => {
    dispatch(destroy(id, loginStatus.token));
  };
  if (view.data) {
    return <Redirect to={`/home/${loginStatus.username}`} />;
  }
  if (requestStatus.loading) {
    return <LoadingIcon />;
  }
  return (
    <section className="shadow">
      <div className="card mt-5">
        {
          edit ? (<input className="form-control mb-2 font-weight-bold" type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />) : (<h3 className="card-header">{filteredItem.title}</h3>)
        }

        <div className="card-body">
          {
            edit ? (
              <>
                <input className="form-control mb-2" type="date" name="date" id="date" value={newdate} onChange={(e) => setNewDate(e.target.value)} />
                <input className="form-control mb-2 font-weight-bold" type="text" name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <input className="form-control mb-2 font-weight-bold" type="text" name="link" id="link" value={link} onChange={(e) => setLink(e.target.value)} />
              </>
            ) : (
              <>
                <h5 className="card-title border-bottom pb-4">{date}</h5>
                <p className="card-text">{filteredItem.content}</p>
                <a href={filteredItem.link} className="btn btn-primary mt-4">
                  {`Go to ${filteredItem.link}`}
                </a>
              </>
            )
          }
        </div>
      </div>
      <footer className="card-footer d-flex justify-content-between">
        {
          edit ? (
            <>
              <button className="btn" type="button">
                <FontAwesomeIcon icon={faSave} style={{ color: 'black', fontSize: '20px' }} onClick={handleEdit} />
                &apos;
              </button>
              <button className="btn" type="button" onClick={toggleEdit}>
                <FontAwesomeIcon icon={faUndo} style={{ color: 'black', fontSize: '20px' }} />
                &apos;
              </button>
            </>
          ) : (
            <>
              <button className="btn" type="button" onClick={toggleEdit}>
                <FontAwesomeIcon icon={faEdit} style={{ color: 'black', fontSize: '20px' }} />
                &apos;
              </button>
              <button className="btn" type="button">
                <FontAwesomeIcon icon={faTrash} style={{ color: 'black', fontSize: '20px' }} onClick={handleDelete} />
                &apos;
              </button>
            </>
          )
        }
      </footer>
    </section>
  );
};

export default View;
