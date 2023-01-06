import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../snack.service";

export const DashBoardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSnackbar({ message: "Welcome", severity: "success" }));
  }, []);

  return <>DashBoardPage</>;
};
