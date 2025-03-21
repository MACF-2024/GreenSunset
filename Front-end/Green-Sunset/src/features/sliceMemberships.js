import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    memberships: []
};

const membershipSlice = createSlice({
    name: "membership",
    initialState,
    reducers: {}
});

export default membershipSlice.reducer
// export const {  } = userSlice.actions 