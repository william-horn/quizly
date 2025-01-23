"use client";
import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#039be5",
      dark: "#01579b",
      light: "#b3e5fc",
    },
    secondary: {
      main: "#ff5722",
      dark: "#d84315",
    },
    background: {
      primary: "#eeeeee",
      primaryInset: "#9e9e9e",
      alert: "#f44336",
    },
    text: {
      primary: "#212121",
      light: "#e0f7fa",
      dark: "#212121",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      color: "#039be5",
      component: "h1",
      textAlign: ["center", "left"],
      fontWeight: 900,
    },
  },
});

export default theme;
