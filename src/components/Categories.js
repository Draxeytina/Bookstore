import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories);
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="display">
      <li>{categoryList}</li>
      <button
        type="button"
        onClick={handleCheckStatus}
      >
        Check Status
      </button>
    </div>
  );
}
