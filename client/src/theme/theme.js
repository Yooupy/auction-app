import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0077b6",
      light: "#48a3c6",
      dark: "#005B8E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#a2d2ff",
      light: "#d3f0ff",
      dark: "#6d9eeb",
      contrastText: "#000",
    },
    error: {
      main: "#FF5252",
      light: "#FFD0D0",
      dark: "#BF3030",
      contrastText: "#fff",
    },
    warning: {
      main: "#FFC107",
      light: "#FFE082",
      dark: "#FF8F00",
      contrastText: "#fff",
    },
    success: {
      main: "#4CAF50",
      light: "#C8E6C9",
      dark: "#388E3C",
      contrastText: "#fff",
    },
    info: {
      main: "#2196F3",
      light: "#BBDEFB",
      dark: "#1976D2",
      contrastText: "#fff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#BDBDBD",
      hint: "#9E9E9E",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
});

export default theme;
