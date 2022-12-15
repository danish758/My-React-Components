import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";
import { pink } from "@mui/material/colors";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";

const StyledCheckbox = styled(Checkbox)(({ theme, size, checkedColor }) => ({
  color: "red",
  "& .MuiSvgIcon-root": {
    fontSize: size,
  },
  "&.Mui-checked": {
    color: checkedColor,
  },
}));
export default function CustomCheckbox() {
  return (
    <Stack>
      <Box>
        <Typography variant="h6">Color</Typography>
        <StyledCheckbox defaultChecked checkedColor="#3e2723" />
      </Box>
      <Box>
        <Typography variant="h6">Color and Size</Typography>
        <StyledCheckbox size="50px" defaultChecked checkedColor="#00bfa5" />
      </Box>
    </Stack>
  );
}
