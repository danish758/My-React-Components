import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#E0E3E7", height: "100px" }}>
      <Stack sx={{ py: 4 }}>
        <Typography variant="h6">
          My sticky footer can be found here.
        </Typography>
        <Typography variant="h6">Copyright © Your Website 2023.</Typography>
      </Stack>
    </Box>
  );
};
