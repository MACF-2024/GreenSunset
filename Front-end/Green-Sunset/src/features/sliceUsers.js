import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // setUser: (state, action) => {
        //     state.users = action.payload;
        // }
    }
});

export default userSlice.reducer;
// export const { setUser } = userSlice.actions;