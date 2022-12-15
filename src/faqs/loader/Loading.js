import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const LOADER = ({ padding, size }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: padding }}>
      <CircularProgress size={size} />
    </Box>
  );
};
