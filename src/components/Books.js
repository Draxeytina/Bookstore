import BooksList from './Books/BooksList';
import AddBook from './Books/AddBook';

export default function Books() {
  return (
    <div>
      <ul>
        <BooksList />
      </ul>
      <AddBook />
    </div>
  );
}
