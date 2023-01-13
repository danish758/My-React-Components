import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { Box, Button, TextField } from "@mui/material";

export const CenderedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  "&:hover": {
    // backgroundColor: "#512da8",
    boxShadow: "none",
  },
}));

export const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  boxShadow: "none",
  "&:hover": {
    // backgroundColor: "#512da8",
    boxShadow: "none",
  },
}));

export const StyledTextField = styled(TextField)(
  ({ theme, background, borderColor, borderRadius }) => ({
    background: background,
    borderRadius: borderRadius,
    padding: "5px",
    border: `1px solid ${borderColor}`,
  })
);
