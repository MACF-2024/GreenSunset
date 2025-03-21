import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/sliceUsers';
import orderReducer from '../features/sliceOrders';
import productReducer from '../features/sliceProducts';
import membershipReducer from '../features/sliceMemberships';
import cartReducer from '../features/sliceCarts';
import favoriteReducer from '../features/sliceFavorites';


export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        membriship: membershipReducer,
        cart: cartReducer,
        order: orderReducer,
        favorite: favoriteReducer
    }
});