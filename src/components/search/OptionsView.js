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
}) {
  const selectItem = (selected) => {
    setShow("none");
    setFilterName(selected);
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
        >
          <MenuList onClick={(e) => e.stopPropagation()}>
            {!fetching && options.length != 0 ? (
              options.map((option) => (
                <MenuItem
                  onClick={() => selectItem(option.question.slice(0, 20))}
                >
                  {option.question.slice(0, 20)}
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
