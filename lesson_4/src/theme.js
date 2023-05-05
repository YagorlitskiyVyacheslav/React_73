import { DARK, LIGHT } from "./constants/theme";

const light = {
  currentTheme: LIGHT,
  colors: {
    primary: "#000",
    secondary: "#fff",
    accent: "#999",
    danger: "#ff0000",
    success: "#008000",
  },
};

const dark = {
  currentTheme: DARK,
  colors: {
    primary: "#fff",
    secondary: "#000",
    accent: "#ccc",
    danger: "#ff0000",
    success: "#008000",
  },
};

export const theme = {
  [LIGHT]: light,
  [DARK]: dark,
};
