import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const LOADER = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <CircularProgress />
    </Box>
  );
};
