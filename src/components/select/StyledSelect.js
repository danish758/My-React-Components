import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const StyledSeLect = styled(Select)(({ theme, background, borderColor }) => ({
  background: background,
  borderRadius: "24px",
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#616161",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#616161",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffab91",
  },
}));

export default function StyledSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <StyledSeLect
          background="#f5f5f5"
          borderColor="red"
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <em style={{ color: "#bdbdbd", textAlign: "start" }}>
                  Customize Styles
                </em>
              );
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          style={{ textAlign: "start" }}
        >
          <MenuItem sx={{ display: "none" }} value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
          {/* </div> */}
        </StyledSeLect>
      </FormControl>
    </div>
  );
}
