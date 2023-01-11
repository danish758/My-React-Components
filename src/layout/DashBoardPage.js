import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decideWelcome } from "../redux/slices/welcomeMsgSlice";
import { setSnackbar } from "../snack.service";

export const DashBoardPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    welcomeMsgSlice: { showWelcomeMsg },
  } = state || {};
  console.log("showWelcomeMsg", showWelcomeMsg);
  useEffect(() => {
    showWelcomeMsg &&
      dispatch(setSnackbar({ message: "Welcome", severity: "success" }));
    dispatch(decideWelcome());
  }, []);

  return <>DashBoardPage</>;
};
