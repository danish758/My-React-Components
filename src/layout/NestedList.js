import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import styled from "@emotion/styled";
import { ListItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import { setSelectedItem } from "../redux/slices/selectedListItem";
import { useDispatch } from "react-redux";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const StyledListItem = styled(ListItem)({
  "& .MuiTypography-root": {
    fontWeight: "bold !important",
  },
  "& .MuiListItemButton-root": {
    borderRadius: "10px",
    color: "#616161",
  },
  "& .Mui-selected": {
    background: "#64b5f6 !important",
    color: "#0d47a1 !important",
    fontWeight: "900 !important",
  },
});

export default function NestedList({
  pages,
  handleListItemClick,
  selectedIndex,
  setSelectedIndex,
  title,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    pages.map((page) => {
      if (page.path == pathname) {
        setSelectedIndex(page.path);
        dispatch(setSelectedItem(page.path));
      } else {
        // console.log("noooo child");
      }
    });
  }, [pathname]);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        // bgcolor: "#9e9e9e"
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <StyledListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={title} />
          {open ? (
            <ExpandLess color="primary" />
          ) : (
            <NavigateNextIcon color="primary" />
          )}
        </ListItemButton>
      </StyledListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {pages.map((page) => (
            <StyledListItem>
              <ListItemButton
                selected={page.path == selectedIndex}
                onClick={() => handleListItemClick(page)}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={page.title} />
              </ListItemButton>
            </StyledListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
