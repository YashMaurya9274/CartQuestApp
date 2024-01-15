import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

type InitialStateProps = {
  cartItems: ProductType[] | null;
};

const initialState: InitialStateProps = {
  cartItems: null,
};

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    updateCartItems: (state, action) => {
      if (state.cartItems === null) {
        state.cartItems = [action.payload];
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    deleteCartItem: (state, action) => {
      if (state.cartItems !== null) {
        const items = state.cartItems;
        items.splice(action.payload, 1);
        state.cartItems = items;
      }
    },
  },
});

export const {updateCartItems, deleteCartItem} = cartItemsSlice.actions;

export const selectCartItems = (state: RootState) => state.cartItems.cartItems;

export default cartItemsSlice.reducer;
