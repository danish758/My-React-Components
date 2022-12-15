import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import CustomTabs from "./Tabs";

const Customization = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Box
        sx={{
          m: 4,
          display: "flex",
          justifyContent: "center",
          gap: 8,
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography variant="h1">Outlined Textfield</Typography>
          <TextField
            variant="outlined"
            placeholder="Outlined"
            inputProps={{ style: { paddingTop: "20px" } }}
          />
        </Box>

        <Box>
          <Typography variant="h6">Filled Textfield</Typography>
          <TextField
            variant="filled"
            placeholder="Filled"
            inputProps={{
              style: { paddingTop: "12px", paddingBottom: "12px" },
            }}
            // InputProps={{ disableUnderline: false }}
          />
        </Box>
      </Box>

      <Box
        sx={{ m: 4, display: "flex", justifyContent: "center", gap: 8, mt: 8 }}
      >
        <CustomTabs />
      </Box>
    </Box>
  );
};

export default Customization;
