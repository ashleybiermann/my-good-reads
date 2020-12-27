import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'wishlist',
  initialState: Array<Object>(),
  reducers: {
    // name the action (as listed for useDispatch slice.actions)
    updateWishlist: (state, action) => {
      state += action.payload;
      return state;
    }
  }
});

// for use with useSelector()
export const getWishlist = (state: any) => state.bookSearch;

// for use with useDispatch()
export const { updateWishlist } = slice.actions;

export default slice.reducer;