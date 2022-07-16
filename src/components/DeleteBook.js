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
    <div
      role="button"
      className="link"
      onClick={handleRemove}
      onKeyUp={handleRemove}
      tabIndex="-2"
    >
      Delete
    </div>
  );
};

export default Remove;
