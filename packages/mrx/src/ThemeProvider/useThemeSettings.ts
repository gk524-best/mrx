import React from "react";
import ThemeSettingsContext from "./ThemeSettingsContext";

export default function useThemeSettings() {
  const settings = React.useContext(ThemeSettingsContext);
  if (process.env.NODE_ENV !== "production") {
    React.useDebugValue(settings);
  }
  return settings;
}
