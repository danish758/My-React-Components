import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import IconChange from "./IconChange";
import MuiSelect from "./Placeholder";
import StyledSelect from "./StyledSelect";
import SelectAllFeature from "./SelectAllFeature";

const Wrapper = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h6">Placeholder</Typography>
        <MuiSelect />
      </Box>
      <Box>
        <Typography variant="h6">Customize Icon</Typography>
        <IconChange />
      </Box>
      <Box>
        <Typography variant="h6">Customize Styles</Typography>
        <StyledSelect />
      </Box>
      <Box>
        <Typography variant="h6">Select All Feature</Typography>
        <SelectAllFeature />
      </Box>
    </Stack>
  );
};

export default Wrapper;
