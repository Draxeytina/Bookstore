import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function BooksList({ Author, Title, Index }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(Index));
  };
  return (
    <ul>
      <li className={Index}>
        Title:
        {' '}
        {Title}
        {' '}
        by
        {' '}
        {Author}
        {' '}
        <button type="button" onClick={handleRemove}>Delete</button>
      </li>
    </ul>
  );
}

BooksList.propTypes = {
  Author: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Index: PropTypes.number.isRequired,
};
