/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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
    dispatch(addBook(state.title, state.author));
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
      <input type="submit" value="Add" />
    </form>
  );
}
