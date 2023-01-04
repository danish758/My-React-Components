import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "./sidebarPages";
import NestedList from "./NestedList";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.authSlice);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: !isMobile ? "flex" : "block" }}>
      {!isMobile ? (
        <Box sx={{ minWidth: "280px" }}>
          <Sidebar />
        </Box>
      ) : (
        <Box sx={{ float: "left" }}>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Box>
      )}
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
      <Drawer
        sx={{
          width: "80%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 280,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <Divider />
        <Box sx={{ width: "100%" }}>
          <Sidebar />
        </Box>
      </Drawer>
    </Box>
  );
};

export default DashboardLayout;
