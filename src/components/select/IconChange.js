import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import select from "../../assets/select.svg";
import { Box } from "@mui/system";
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

export default function IconChange() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  // console.log("defaultValueOfSelect", defaultValue);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
        <Select
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <em style={{ color: "#bdbdbd", textAlign: "start" }}>
                  Select a Name
                </em>
              );
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          style={{ textAlign: "start" }}
          IconComponent={(props) => (
            <Box
              {...props}
              sx={{
                height: "17px",
                width: "17px",
              }}
            >
              <img src={select} height="100%" width="100%" />
            </Box>
          )}
        >
          <MenuItem sx={{ display: "none" }} value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
