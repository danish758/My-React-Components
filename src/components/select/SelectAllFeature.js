import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Divider, FormControlLabel } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  variant: "menu",
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

export default function SelectAllFeature() {
  const [personName, setPersonName] = React.useState([]);
  const [selectAll, setSelectAll] = React.useState(false);

  const handleSelectAll = (e) => {
    console.log("select All", e.target.checked);
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      console.log("select All");
      setPersonName(names);
    } else {
      setPersonName([]);
    }
  };
  const handleChange = (event) => {
    // console.log("value", event.target.value.length === names.length);
    const allSelected = event.target.value.length === names.length;
    if (allSelected) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      // typeof value === "string" ? value.split(",") :
      value
    );
  };
  console.log("personName", personName);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Select All Feature
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Select All Feature" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          <MenuItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAll}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Select All"
              labelPlacement="end"
            />
          </MenuItem>
          <Divider />
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
