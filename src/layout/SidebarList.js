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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../redux/slices/selectedListItem";

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
  // console.log("state", SelectedIndex);
  const [selectedIndex, setSelectedIndex] = React.useState(SelectedIndex);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleListItemClick = (item, index) => {
    setSelectedIndex(index);
    dispatch(setSelectedItem(index));
    navigate(item.path);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        {pages.map((item, index) => (
          <StyledListItem key={index}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(item, index)}
            >
              {/* <ListItemIcon>
              <InboxIcon />
            </ListItemIcon> */}
              <ListItemText primary={item.title} />
            </ListItemButton>
          </StyledListItem>
        ))}
      </List>
    </Box>
  );
}
