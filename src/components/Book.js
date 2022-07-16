import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Remove from './DeleteBook';
import './book.scss';

const Book = (props) => {
  const { id, title, author } = props;
  const progress = Math.round(Math.random() * 100);
  const chapter = Math.round(progress / 2 + 1);
  const category = [
    'Action',
    'Fiction',
    'Adventure',
    'Classics',
    'Detective',
    'Comic Book',
    'Fantasy',
    'Romance',
    'Children',
    'Poetry',
  ];

  return (
    <li className="card">
      <div className="sec-info">
        <h3>{category[Math.floor(Math.random() * 10)]}</h3>
        <h2>{title}</h2>
        <p><a href="/home" className="link">{author}</a></p>
        <ul className="editBar">
          <li><a href="/home" className="link">Comments</a></li>
          <li><span className="separator">|</span></li>
          <li className={id}><Remove /></li>
          <li><span className="separator">|</span></li>
          <li><a href="/home" className="link">Edit</a></li>
        </ul>
      </div>
      <div className="sec-graph">
        <CircularProgressbar
          value={progress}
          className="graphBox"
          strokeWidth={6}
          styles={buildStyles({
            pathColor: '#0290ff',
            trailColor: 'rgba(0,0,0,0.1)',
          })}
        />
        <div>
          <h4>{`${progress}%`}</h4>
          <p>Completed</p>
        </div>
      </div>
      <div className="sec-update">
        <h4>CURRENT CHAPTER</h4>
        <p>{`Chapter ${chapter}`}</p>
        <button type="button" className="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.defaultProps = {
  id: '',
  title: '',
  author: '',
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
