// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CenderedBox } from "../../common/styled/StyledComponents";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import { Box } from "@mui/system";
import OptionsView from "./OptionsView";
import { useGetSearchResultQuery } from "../../redux/searchService";
// component

// ----------------------------------------------------------------------

const StyledRoot = styled(Toolbar)(({ theme }) => ({
  padding: "0 !important",
  display: "flex",
  justifyContent: "space-between",
  //   padding: theme.spacing(0, 1, 0, 3),
}));

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  "&.Mui-focused": {
    // width: 320,
    // boxShadow: theme.customShadows.z8,
  },
  "& fieldset": {
    borderWidth: `1px !important`,
    // borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

// ----------------------------------------------------------------------

export default function Search({}) {
  const [filterName, setFilterName] = useState("");
  const [show, setShow] = useState("none");
  const { data: { data: { results = [] } = {} } = {}, isFetching } =
    useGetSearchResultQuery(filterName);

  const onChange = (e) => {
    const val = e.target.value;
    setFilterName(val);
    if (val) {
      setShow("block");
    } else {
      setShow("none");
    }
  };
  const handleTextFieldClick = (e) => {
    e.stopPropagation();
    if (filterName == "") {
      setShow("none");
    } else {
      setShow("block");
    }
  };

  return (
    <CenderedBox width={"100%"} onClick={() => setShow("none")}>
      <Box
      // sx={{ width: "400px" }}
      >
        <StyledRoot
          sx={{
            color: "primary.main",
            bgcolor: "primary.lighter",
          }}
        >
          <StyledSearch
            value={filterName}
            onChange={onChange}
            placeholder="Search user..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="start">
                <CancelIcon
                  fontSize="small"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterName("");
                    setShow("none");
                  }}
                />
              </InputAdornment>
            }
            fullWidth
            onClick={(e) => handleTextFieldClick(e)}
          />
        </StyledRoot>
        <Box sx={{ height: "auto" }}>
          <OptionsView
            show={show}
            options={results}
            fetching={isFetching}
            setFilterName={setFilterName}
            setShow={setShow}
          />
        </Box>
      </Box>
    </CenderedBox>
  );
}
