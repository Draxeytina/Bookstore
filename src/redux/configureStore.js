import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer, { booksAPIReducer } from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  booksAPIReducer,
  statusReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
