import { createSlice } from "@reduxjs/toolkit";

const welcomeMsgSlice = createSlice({
  name: "welcomeMsgSlice",
  initialState: {
    showWelcomeMsg: true,
  },
  reducers: {
    decideWelcome: (state, { payload }) => {
      state.showWelcomeMsg = false;
    },
  },
});
export const { decideWelcome } = welcomeMsgSlice.actions;
export default welcomeMsgSlice.reducer;
