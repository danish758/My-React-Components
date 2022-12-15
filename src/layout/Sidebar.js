import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// @mui
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { pages } from "./sidebarPages";
import SidebarList from "./SidebarList";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      <Box>
        {/* <List disablePadding sx={{ p: 1 }}>
          {pages.map((item) => (
            <ListItem key={item.title} item={item}>
              <Box
                component={NavLink}
                to={item.path}
                sx={{
                  textDecoration: "none",
                  color: "#424242",
                  fontSize: "15px",
                  width: "100%",
                  background: "#b3e5fc",
                  borderRadius: "10px",
                }}
              >
                <ListItemButton>{item.title}</ListItemButton>
              </Box>
            </ListItem>
            // <NavItem key={item.title} item={item} />
          ))}
        </List> */}
        <SidebarList />
      </Box>
    </Box>
  );
};
