import { createSlice } from "@reduxjs/toolkit";

const selectedItemSlice = createSlice({
  name: "selected",
  initialState: {
    selectedIndex: 0,
  },
  reducers: {
    setSelectedItem: (state, { payload }) => {
      state.selectedIndex = payload;
    },
  },
});
export const { setSelectedItem } = selectedItemSlice.actions;
export default selectedItemSlice.reducer;
