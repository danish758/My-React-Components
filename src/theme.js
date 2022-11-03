import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#ab003c",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disabled: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // Some CSS
          borderRadius: "24px",
          textTransform: "none",
        },
      },
    },
  },
});
