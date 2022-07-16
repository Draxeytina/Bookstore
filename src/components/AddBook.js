/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

import './addbook.scss';

const UniqueStringGenerator = require('unique-string-generator');

export default function AddBook() {
  const [state, setState] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    const form = document.querySelector('form');
    event.preventDefault();
    dispatch(addNewBook([UniqueStringGenerator.UniqueNumber(), state.title, state.author, 'TBA']));
    form.reset();
  };

  return (
    <div className="addbook">
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className="formGrid">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            className="inputForm"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="inputForm"
            onChange={handleChange}
            required
          />
          <input className="button" type="submit" value="Add Book" />
        </div>
      </form>
    </div>
  );
}
