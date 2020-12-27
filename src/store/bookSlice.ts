import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'bookSearch',
  initialState: Array<Object>(),
  reducers: {
    // name the action (as listed for useDispatch slice.actions)
    updateAllAvailableBooks: (state, action) => {
      return state = action.payload;
    }
  }
});

// for use with useSelector()
export const getAllAvailableBooks = (state: any) => state.bookSearch;

// for use with useDispatch()
export const { updateAllAvailableBooks } = slice.actions;

export default slice.reducer;