import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "15px",
    background: "#5e35b1",
    color: "#fff",
    width: "500px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalForValues({
  openModal,
  setOpenModal,
  formValues,
}) {
  const handleClose = () => {
    setOpenModal(false);
  };
  console.log("formValues", formValues);
  return (
    <div>
      <StyledDialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ borderRadius: "24px" }}
      >
        <DialogTitle>{"Form Values"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ color: "#fff", whiteSpace: "pre-wrap" }}
          >
            {/* {formValues.map((val) => {
              console.log("val", val);
              return (
                <Box sx={{ color: "#fff" }}>
                  <Typography variant="h6">name: {val.name}</Typography>
                </Box>
              );
            })} */}
            {/* <Typography variant="h6"> */}
            {JSON.stringify(formValues, undefined, 2)}
            {/* </Typography> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
