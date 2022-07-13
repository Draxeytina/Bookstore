import React from 'react';
import PropTypes from 'prop-types';

export default function BooksList({ Author, Title, Index }) {
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
        <button type="button">Delete</button>
      </li>
    </ul>
  );
}

BooksList.propTypes = {
  Author: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Index: PropTypes.number.isRequired,
};
