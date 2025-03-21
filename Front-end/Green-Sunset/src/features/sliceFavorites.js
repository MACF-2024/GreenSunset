import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
};

export const favotireSlice = createSlice({
    name:'favorite',
    initialState,
    reducers: {}
});

export default favotireSlice.reducer;
// export const {  }