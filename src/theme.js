import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

let Theme = createTheme();
export const theme = createTheme(Theme, {
  palette: {
    // primary: {
    //   main: "#ff9800",
    // },
    background: {
      default: "#F0F3F8",
    },
  },
  components: {
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: true,
    //     // disabled: true,
    //   },
    // },
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       // Some CSS
    //       borderRadius: "24px",
    //       textTransform: "none",
    //       // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    //       "&:hover": {
    //         // boxShadow: "none",
    //       },
    //     },
    //   },
    // },
    MuiTabs: {
      defaultProps: {
        selectionFollowsFocus: true,
        textColor: "secondary",
        indicatorColor: "secondary",
      },
      styleOverrides: {
        indicator: {
          "&.MuiTabs-indicator": {
            display: "none",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "#7e57c2",
            borderRadius: "24px",
            color: "white",
          },
        },
      },
    },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiOutlinedInput-root": {
    //         borderRadius: "100px",

    //         "&.Mui-focused fieldset": {
    //           borderColor: "purple",
    //         },
    //         "&:hover fieldset": {
    //           borderColor: "green",
    //         },
    //       },
    //       "& .MuiOutlinedInput-notchedOutline": {
    //         border: "2px solid red",
    //         borderRadius: "100px",
    //         top: "0px",
    //       },
    //       "& .MuiFilledInput-root": {
    //         border: "2px solid transparent",
    //         borderRadius: "100px",
    //       },
    //     },
    //   },
    //   defaultProps: {
    //     InputProps: {
    //       disableUnderline: true,
    //       // inputProps: {
    //       //   style: {
    //       //     paddingTop: "12px",
    //       //   },
    //       // },
    //     },
    //   },
    // },
  },

  typography: {
    allVariants: {
      fontStyle: "normal",
    },
    h1: {
      fontSize: "48px",
      [Theme.breakpoints.down("sm")]: {
        fontSize: "25px", // 20px
      },
    },
    h6: {
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: "700",
      // [Theme.breakpoints.down("sm")]: {
      //   fontSize: "25px", // 20px
      // },
    },
    h5: {
      fontSize: "13px",
      lineHeight: "19px",
      // fontWeight: "700",
    },
    h4: {
      fontSize: "30px",
      lineHeight: "25px",
      fontWeight: "700",
    },
  },
});
