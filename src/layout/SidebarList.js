import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { pages } from "./sidebarPages";
import { ListItem } from "@mui/material";
import styled from "@emotion/styled";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../redux/slices/selectedListItem";
import NestedList from "./NestedList";

const StyledListItem = styled(ListItem)({
  "& .MuiTypography-root": {
    fontWeight: "bold !important",
  },
  "& .MuiListItemButton-root": {
    borderRadius: "10px",
    color: "#616161",
  },
  "& .Mui-selected": {
    background: "#e1f5fe !important",
    color: "rgba(59,130,246,.5) !important",
    fontWeight: "900 !important",
  },
});

export default function SidebarList() {
  const { selectedItemSlice: { selectedIndex: SelectedIndex = 0 } = {} } =
    useSelector((state) => state);
  const [selectedIndex, setSelectedIndex] = React.useState(SelectedIndex);
  console.log("selectedIndex", SelectedIndex);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const handleListItemClick = (item) => {
    setSelectedIndex(item.path);
    dispatch(setSelectedItem(item?.path));
    navigate(item.path);
  };

  React.useEffect(() => {
    pages.map((page) => {
      if (page.path == pathname) {
        setSelectedIndex(page.path);
        dispatch(setSelectedItem(page.path));
      } else {
        console.log("noooo");
      }
    });
  }, [pathname]);

  return (
    <Box
      sx={{
        width: "100%",
        // maxWidth: 360,
        // bgcolor: "#9e9e9e"
      }}
    >
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ height: "100vh", overflowY: "auto" }}
      >
        {pages.map((item, index) =>
          !item?.nested ? (
            <StyledListItem key={index}>
              <ListItemButton
                selected={selectedIndex === item.path}
                onClick={() => handleListItemClick(item, index)}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            </StyledListItem>
          ) : (
            <NestedList
              pages={item.subPages}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
              setSelectedIndex={setSelectedIndex}
              title={item.title}
            />
          )
        )}
        {/* <StyledListItem>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
          </ListItemButton>
        </StyledListItem> */}
      </List>
    </Box>
  );
}
