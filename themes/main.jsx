"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a5563",
      dark: "#37474f",
      light: "#b3e5fc",
    },
    secondary: {
      main: "#ed6c02",
      dark: "#d84315",
    },
    background: {
      primary: "#252b33",

      primaryInsetDark: "#1b2129",
      primaryInsetLight: "#2e3743",

      primaryInsetBorderDark: "#606265",
      primaryInsetBorderLight: "#606265",

      alert: "#dd2c00",
      alertBorder: "#ff5353",
    },
    text: {
      primary: "#ffffff",
      light: "#e0f7fa",
      dark: "#212121",
    },
  },
  typography: {
    fontFamily: "Montserrat",
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
