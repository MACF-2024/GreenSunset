import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
};

export const produtSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {}
});

export default produtSlice.reducer;
// export {  }