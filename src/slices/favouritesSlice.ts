import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

type InitialStateProps = {
  favouriteItems: number[] | null;
};

const initialState: InitialStateProps = {
  favouriteItems: null,
};

export const favouriteItemsSlice = createSlice({
  name: 'favouriteItems',
  initialState,
  reducers: {
    addFavouriteItems: (state, action) => {
      if (state.favouriteItems === null) {
        state.favouriteItems = [action.payload];
      } else {
        state.favouriteItems = [...state.favouriteItems, action.payload];
      }
    },
    deleteFavouriteItem: (state, action) => {
      if (state.favouriteItems !== null) {
        const items = state.favouriteItems;
        items.splice(action.payload, 1);
        state.favouriteItems = items;
      }
    },
  },
});

export const {addFavouriteItems, deleteFavouriteItem} =
  favouriteItemsSlice.actions;

export const selectFavouriteItems = (state: RootState) =>
  state.favouriteItems.favouriteItems;

export default favouriteItemsSlice.reducer;
