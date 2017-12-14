import { combineReducers } from 'redux';
import booksReducers from './reducers_books';

const rootReducer = combineReducers({
  books: booksReducers,
});

export default rootReducer;
