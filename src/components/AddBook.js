/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

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
    <form action="#" onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" onChange={handleChange} required />
      </label>
      <label>
        Author:
        <input type="text" name="author" onChange={handleChange} required />
      </label>
      <input type="submit" value="Add Book" />
    </form>
  );
}
