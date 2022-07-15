import React from 'react';
import PropTypes from 'prop-types';
import Remove from './DeleteBook';

const Book = (props) => {
  const { id, title, author } = props;

  return (
    <li className={id}>
      Title:
      {' '}
      {title}
      {' '}
      by
      {' '}
      {author}
      {' '}
      <Remove />
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
