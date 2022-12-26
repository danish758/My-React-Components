import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// @mui
import { Box, useMediaQuery } from "@mui/material";
import { pages } from "./sidebarPages";
import SidebarList from "./SidebarList";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

export const Sidebar = () => {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      <Box>
        <SidebarList />
      </Box>
    </Box>
  );
};
