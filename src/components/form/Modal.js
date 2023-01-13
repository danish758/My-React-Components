import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import { StyledTextField } from "../../common/styled/StyledComponents";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "15px",
    background: "#e6ee9c",
    // color: "#000",
    width: "500px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({
  openModal,
  setOpenModal,
  modalData,
  ModalHeading,
}) {
  const { pathname } = useLocation();
  // console.log("pathname", pathname);
  // console.log("modalData", Object.entries(modalData));

  const handleClose = () => {
    setOpenModal(false);
  };
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
        <DialogTitle>{ModalHeading}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ whiteSpace: "pre-wrap" }}
          >
            {pathname == "/form" ? (
              modalData
            ) : (
              <Grid container spacing={2}>
                {Object.entries(modalData).map(
                  (record) =>
                    record[0] != "userId" && (
                      <Grid
                        item
                        xs={12}
                        md={6}
                        display="flex"
                        justifyContent={"center"}
                      >
                        <Box>
                          <Typography variant="h6" sx={{ mb: 2 }}>
                            {record[0] == "id"
                              ? "ID"
                              : record[0] == "title"
                              ? "Title"
                              : "Status"}
                          </Typography>
                          <StyledTextField
                            id="filled-basic"
                            variant="standard"
                            borderRadius="8px"
                            borderColor="gray"
                            InputProps={{
                              disableUnderline: true,
                            }}
                            placeholder="Enter text here.."
                            value={
                              record[0] == "completed"
                                ? record[1]
                                  ? "Done"
                                  : "Pending"
                                : record[1]
                            }
                            disabled
                          />
                        </Box>
                      </Grid>
                    )
                )}
              </Grid>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
