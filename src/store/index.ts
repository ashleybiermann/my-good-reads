import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookSearchReducer from './bookSlice';
import wishlistReducer from './wishlist';

const rootReducer = combineReducers({
  // name it will have in state : reducer being used to get such data
  wishlist: wishlistReducer,
  bookSearch: bookSearchReducer,
})

const store = configureStore({
  reducer: rootReducer,
});

export default store;
