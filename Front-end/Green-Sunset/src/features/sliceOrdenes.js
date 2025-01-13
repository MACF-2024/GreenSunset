import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ordes: []
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {}
});

export default orderSlice.reducer
// export const {  } = orderSlice.actions 