import { PaletteOptions } from "@material-ui/core/styles/createPalette";

type PaletteName = "light" | "purpleDark";

type Palette = {
  palette: PaletteOptions;
};

type TextLight = Record<"primary" | "secondary" | "disabled" | "hint", string>;

const textLight: TextLight = {
  primary: "rgba(52, 49, 76, 1)",
  secondary: "rgba(52, 49, 76, 0.54)",
  disabled: "rgba(52, 49, 76, 0.38)",
  hint: "rgba(52, 49, 76, 0.38)",
};

type SecondaryColor = Record<
  "light" | "main" | "dark" | "contrastText",
  string
>;

const secondaryColor: SecondaryColor = {
  light: "#f9a352",
  main: "#ff9e43",
  dark: "#ff932e",
  contrastText: textLight.primary,
};

export const themeColors: Record<PaletteName, Palette> = {
  light: {
    palette: {
      type: "light",
      primary: {
        main: "#fff",
        contrastText: textLight.primary,
      },
      secondary: {
        main: "#7467ef",
        contrastText: textLight.primary,
      },
      text: textLight,
    },
  },
  purpleDark: {
    palette: {
      type: "dark",
      primary: {
        main: "#7467ef",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#ff9e43",
        contrastText: textLight.primary,
      },
      background: {
        paper: "#222A45",
        default: "#1a2038",
      },
    },
  },
};
