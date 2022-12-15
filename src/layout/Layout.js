import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", mt: 4 }}>
      <Box sx={{ width: "280px" }}>
        <Sidebar />
      </Box>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
