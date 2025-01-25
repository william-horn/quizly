"use client";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import _default from "@mui/material/styles/identifier";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a5563", // #4a5563
      dark: "#37474f", // #37474f
      light: "#b3e5fc", // #b3e5fc
    },
    secondary: {
      main: "#ed6c02", // #ed6c02
      dark: "#d84315", // #d84315
    },
    navButton: {
      main: "#ffffff", // #ffffff
      selected: "#ed6c02", // #ed6c02
    },
    background: {
      first: "#252b33", // #252b33
    },
    backgroundInset: {
      first: "#2e3743", // #2e3743
      second: "#1b2129", // #1b2129
    },
    borderInset: {
      first: "#606265", // #606265
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff", // #ffffff
          fontFamily: "Montserrat",
        },
        h1: {
          fontSize: "2.5rem",
          color: "#039be5", // #039be5
          component: "h1",
          textAlign: ["center", "left"],
          fontWeight: 900,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiInputBase-root": {
            // backgroundColor: "#16181a", // #16181a
            border: "1px solid #606265",
          },
          // ".MuiOutlinedInput-notchedOutline": {
          //   // border: "0px",
          //   border: "1px solid #606265",
          // },
          ".MuiInputLabel-root": {
            color: "#cbcdd5", //#cbcdd5
          },
          ".MuiInputBase-input": {
            color: grey[100],
          },
          ".MuiFormHelperText-root": {
            color: grey[600],
            marginTop: "0.5rem",
          },
          // ".MuiOutlinedInput-notchedOutline": {
          //   backgroundColor: "#16181a",
          //   color: grey[100],
          // },
        },
      },
    },
  },
});

export default theme;
