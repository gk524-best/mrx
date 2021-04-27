import { createMuiTheme, ThemeOptions, Theme } from "@material-ui/core";
import { themeColors } from "./themeColors";
import { foreach, merge } from "lodash";

import breakpoints from "./breakpoints";
import overrides from "./overrides";
import shadows from "./shadows";
import typography from "./typography";
import { zhCN } from "@material-ui/core/locale";

const themeOptions: ThemeOptions = {
  overrides: overrides,
  shadows: shadows,
  typography: typography,
  breakpoints: breakpoints,
};

function generateThemes() {
  const themes = {};
  foreach(themeColors, (value, key) => {
    themeColors[key] = createMuiTheme(merge({}, value, themeOptions, zhCN));
  });
  return themes;
}

export interface Options {
  type: "merge" | "override";
  themes?: Record<string, Theme>;
}

function createMrxTheme(options?: Options): Record<string, Theme> {
  const { type = "merge", themes = {} } = options;
  const mrxThemes = generateThemes();
  switch (type) {
    case "merge":
      return merge({}, mrxThemes, themes);
    case "override":
      return themes;
    default:
      return merge({}, mrxThemes, themes);
  }
}

export default createMrxTheme;
