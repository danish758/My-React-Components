import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const StyledTextField = styled(TextField)(
  ({ theme, background, borderColor, borderRadius }) => ({
    background: background,
    borderRadius: borderRadius,
    padding: "5px",
    border: `1px solid ${borderColor}`,
  })
);

const StyledTextField2 = styled(TextField)(
  ({ theme, background, borderColor }) => ({
    background: background,
    borderRadius: "24px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "24px",
    },
    "& 	.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#283593 !important",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: background && `#b71c1c !important`,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: background && `#01579b !important`,
    },
  })
);

const StyledTextField3 = styled(TextField)(({ background }) => ({
  background: background,
  borderRadius: "3px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "3px",
  },
  "& 	.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9e9e9e !important",
      boxShadow: "0 0 0 0.2rem #90caf9",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: background && `#9e9e9e !important`,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: background && `#9e9e9e !important`,
  },
}));

export const InputFields = () => {
  return (
    <div>
      <Typography variant="h6" sx={{ mb: 4 }}>
        MUI Customized Text Fields
      </Typography>
      <Stack spacing={2}>
        <StyledTextField
          id="filled-basic"
          variant="standard"
          borderRadius="3px"
          // background="#bdbdbd"
          borderColor="#9e9e9e"
          InputProps={{
            disableUnderline: true,
          }}
          placeholder="Enter text here.."
          onFocus={() => console.log("first")}
        />
        <StyledTextField
          id="filled-basic"
          variant="standard"
          background="#bdbdbd"
          borderRadius="10px"
          borderColor="red"
          InputProps={{
            disableUnderline: true,
          }}
          placeholder="Error"
        />
        <StyledTextField2
          id="filled-basic"
          variant="outlined"
          InputProps={{
            disableUnderline: true,
          }}
          placeholder="Notch customization"
        />
        <StyledTextField2
          id="filled-basic"
          variant="outlined"
          background="#f5f5f5"
          InputProps={{
            disableUnderline: true,
          }}
          placeholder="Notch customization"
        />
        <StyledTextField3
          id="filled-basic"
          variant="outlined"
          background="#f5f5f5"
          InputProps={{
            disableUnderline: true,
          }}
          placeholder="Notch customization"
        />
      </Stack>
    </div>
  );
};
