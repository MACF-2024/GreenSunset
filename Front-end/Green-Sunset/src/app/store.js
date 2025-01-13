import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        user: 2,
        product: 2,
        membriship: 2,
        cart: 2,
        order: 2,
        comment: 2,
        ranking: 2
    }
});