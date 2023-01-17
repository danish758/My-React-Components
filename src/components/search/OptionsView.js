import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import { LOADER } from "../../faqs/loader/Loading";

export default function OptionsView({
  show,
  options,
  fetching,
  setFilterName,
  setShow,
  setLimit,
  total,
}) {
  const [previousTop, setPreviousTop] = React.useState(0);
  const selectItem = (selected) => {
    setShow("none");
    setFilterName(selected);
  };
  const handleScroll = (e) => {
    if (previousTop < e.target.scrollTop) {
      // console.log("Height", e.target.scrollHeight);
      console.log("scrollTop", e.target.scrollTop);
      if (
        e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight &&
        options.length < total
      ) {
        setLimit((prev) => prev + 10);
      }
    } else {
      console.log("user scroll to top");
    }
    setPreviousTop(e.target.scrollTop);
  };
  return (
    <Stack direction="row" spacing={2}>
      {show != "none" && (
        <Paper
          sx={{
            width: "100%",
            display: show,
            background: "#F0F3F8",
            boxShadow: "0 2px 12px 0 rgb(0 0 0 / 10%)",
            maxHeight: "200px",
            overflow: "auto",
          }}
          onScroll={handleScroll}
        >
          <MenuList onClick={(e) => e.stopPropagation()}>
            {!fetching && options.length != 0 ? (
              options.map((user, ind) => (
                <MenuItem onClick={() => selectItem(user.firstName)}>
                  {ind}--{user.firstName}
                </MenuItem>
              ))
            ) : !fetching && options.length == 0 ? (
              <Box>No Data</Box>
            ) : (
              <Box>
                <LOADER padding={"2px"} size={20} />
              </Box>
            )}
          </MenuList>
        </Paper>
      )}
    </Stack>
  );
}
