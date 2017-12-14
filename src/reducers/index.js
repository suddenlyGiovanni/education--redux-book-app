import { combineReducers } from 'redux';
import books from './reducers_books';

const rootReducer = combineReducers({
  books,
});

export default rootReducer;
