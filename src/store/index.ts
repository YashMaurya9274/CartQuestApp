import {configureStore} from '@reduxjs/toolkit';
import cartItemsReducer from '../slices/cartItemsSlice';
import favouriteItemsReducer from '../slices/favouritesSlice';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    favouriteItems: favouriteItemsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
