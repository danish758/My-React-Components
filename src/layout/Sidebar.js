import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// @mui
import { Box, useMediaQuery } from "@mui/material";
import { pages } from "./sidebarPages";
import SidebarList from "./SidebarList";

// ----------------------------------------------------------------------

export const Sidebar = () => {
  return (
    <>
      <SidebarList />
    </>
  );
};
