import { createMuiTheme } from "@material-ui/core";
import { themeColors } from "./themeColors";
import { foreach, merge } from "lodash";

function createMrxThemes() {
  const themes = {};
  foreach(themeColors, (value, key) => {
    themeColors[key] = createMuiTheme(merge({}, value));
  });
  return themes;
}

const themes = createMrxThemes();
