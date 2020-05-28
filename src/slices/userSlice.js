import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { isNameSet: false, name: null },
    reducers: {
        setName(state, action) {
            state.name = action.payload;
            state.isNameSet = state.name !== null && state.name !== "";
        },
    },
});

export const { setName } = userSlice.actions;

export default userSlice.reducer;
