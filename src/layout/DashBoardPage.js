import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
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

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h3">
          In this application, some components are built from scratch(without
          using any mui component) and the others are built using mui
          components.The idea is simple to build reusable components that we
          often use.For example , mui does not give multi items per page
          carousel.We have to use some library for it , but I have customized
          MUI Stepper component to achieve this.
        </Typography>
      </Container>
    </>
  );
};
