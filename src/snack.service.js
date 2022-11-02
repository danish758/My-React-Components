import { createSlice } from "@reduxjs/toolkit";

const snackSlice = createSlice({
  name: "snack",
  initialState: {
    message: "",
    severity: "",
    status: false,
  },
  reducers: {
    setSnackbar: (state, { payload }) => {
      state.message = payload.message || "Unknown Error";
      state.severity = payload.severity || "error";
      state.status = true;
    },
    closeSnackbar: (state, { payload }) => {
      state.status = false;
    },
  },
});
export const { setSnackbar, closeSnackbar } = snackSlice.actions;
export default snackSlice.reducer;
