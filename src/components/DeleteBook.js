import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Remove = () => {
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    const { target } = event;
    const id = target.parentNode.classList[0];
    dispatch(removeBook(id));
  };

  return (
    <button type="button" onClick={handleRemove}>Delete</button>
  );
};

export default Remove;
