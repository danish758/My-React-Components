import * as React from "react";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "./snack.service";
import { Slide } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}
export default function SnackBar() {
  let dispatch = useDispatch();
  let { message, severity, status } = useSelector(
    (state) => state.snackService
  );
  function handleClose() {
    dispatch(closeSnackbar());
  }

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={status}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        TransitionComponent={TransitionLeft}
        aria-describedby="client-snackbar"
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
