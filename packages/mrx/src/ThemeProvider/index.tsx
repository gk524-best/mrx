import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { defaultSettings, Settings } from "./settings";

export interface MrxThemeProviderProps {
  children?: React.ReactNode;
  settings: Settings;
}

function MrxThemeProvider(props: MrxThemeProviderProps) {
  const { children, settings } = props;

  if (process.env.NODE_ENV !== "production") {
    const activeTheme = settings.activeTheme;
    const themeNames = Object.keys(settings.themes);
    const sidebarTheme = settings.layoutSetting.sidebar.theme;
    const topbarTheme = settings.layoutSetting.topbar.theme;
    if (!themeNames.includes(activeTheme)) {
      console.error(
        "The value of the activeTheme variable cannot be found in themes"
      );
    }

    if (!themeNames.includes(sidebarTheme)) {
      console.error(
        "The value of the theme variable in the layoutSetting.sidebar cannot be found in themes"
      );
    }

    if (!themeNames.includes(topbarTheme)) {
      console.error(
        "The value of the theme variable in the layoutSetting.topbar cannot be found in themes"
      );
    }
  }

  const theme = settings
    ? settings.themes[settings.activeTheme]
    : defaultSettings.themes[defaultSettings.activeTheme];

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MrxThemeProvider;
