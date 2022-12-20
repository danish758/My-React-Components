import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { alpha, Stack } from "@mui/system";
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
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b71c1c",
      },
      "&:hover fieldset": {
        borderColor: "#01579b",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#283593",
      },
    },
  })
);

const StyledTextField3 = styled(TextField)(({ background }) => ({
  background: background,
  borderRadius: "3px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "3px",
    "&.Mui-focused fieldset": {
      borderColor: "#90caf9 !important",
      boxShadow: `${alpha("#90caf9", 0.25)} 0 0 0 0.2rem`,
    },
    "& fieldset": {
      borderColor: background && `#9e9e9e !important`,
    },
  },

  // "&:hover .MuiOutlinedInput-notchedOutline": {
  //   borderColor: background && `#9e9e9e !important`,
  // },
}));

const CssTextField = styled(TextField)({
  // "& label.Mui-focused": {
  //   color: "green",
  // },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'green',
  // },
  "& .MuiOutlinedInput-root": {
    borderRadius: "24px",
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

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
        <div
          style={{
            background: "linear-gradient(45deg,purple, orange)",
            display: "flex",
            justifyContent: "center",
            borderRadius: "24px",
          }}
        >
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            fullWidth
            placeholder="Gradiant Border"
            sx={{
              background: "#F5F5F5",
              margin: "2px 2px 2px 2px",
              borderRadius: "24px",
              padding: "5px 15px ",
            }}
          />
        </div>
        <CssTextField />
        <CssTextField select />
      </Stack>
    </div>
  );
};
