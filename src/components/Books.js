import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import BooksList from './BooksList';
import AddBook from './AddBook';

export default function Books() {
  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <div>
      {books.map((book, index) => (
        <BooksList
          key={book.title}
          Index={index}
          Author={book.author}
          Title={book.title}
        />
      ))}
      <AddBook />
    </div>
  );
}
