import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
});

export default userSlice.reducer
// export const {  } = userSlice.actions 