import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/system";
import { Container, Tooltip } from "@mui/material";
import styled from "@emotion/styled";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../snack.service";
import { StyledButton } from "../../common/styled/StyledComponents";

export default function ConfirmationModal() {
  const [open, setOpen] = React.useState(null);
  const [arrowRef, setArrowRef] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "left", mb: 4 }}>
        <Typography variant="paragraph">
          We often use these type of confirmations but Mui does not provide us
          these components. I styled Mui Tooltip to design this confirmation
          component.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Click to preview
        </Typography>
        <Tooltip
          open={open}
          arrow
          // onClose={handleClose}
          onClick={handleOpen}
          title={<Content handleClose={handleClose} setOpen={setOpen} />}
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#fff",
                "& .MuiTooltip-arrow": {
                  color: "#fff",
                },
              },
            },
          }}
        >
          <Button startIcon={<Delete />}>Delete</Button>
        </Tooltip>
      </Box>
    </Container>
  );
}

const Content = ({ handleClose, setOpen }) => {
  const dispatch = useDispatch();
  const handleYes = () => {
    dispatch(setSnackbar({ message: "Item Deleted", severity: "success" }));
    setOpen(false);
  };
  const handleNo = () => {
    dispatch(
      setSnackbar({ message: "Confirmation Failed", severity: "error" })
    );
    setOpen(false);
  };
  return (
    <>
      <Stack sx={{ p: 2, color: "#000" }}>
        <Typography variant="h6">Are you sure?</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            mt: 2,
            width: "170px",
            gap: 1,
          }}
        >
          <Button variant="outlined" size="small" onClick={handleNo}>
            No
          </Button>
          <StyledButton size="small" variant="contained" onClick={handleYes}>
            Yes
          </StyledButton>
        </Box>
      </Stack>
    </>
  );
};
