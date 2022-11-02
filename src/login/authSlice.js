import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.user = "Danish";
      state.token = payload;
    },
  },
});
export const { setToken } = authSlice.actions;
export default authSlice.reducer;
