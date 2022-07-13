import BooksList from './BooksList';
import AddBook from './AddBook';

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
