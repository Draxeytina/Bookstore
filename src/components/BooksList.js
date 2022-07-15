import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { retrieveBooks } from '../redux/books/books';

export default function BooksList() {
  const booksData = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

  return (
    <ul>
      {booksData.map((data) => (
        <Book
          key={data.id}
          id={data.id}
          title={data.title}
          author={data.author}
        />
      ))}
    </ul>
  );
}
