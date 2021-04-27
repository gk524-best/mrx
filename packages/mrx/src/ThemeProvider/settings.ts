import { Theme } from "@material-ui/core/styles";
import { defaultThemes } from "./defaultThemes";

export type FooterSetting = {
  show: boolean;
  fixed: boolean;
  theme: string;
};

export type TopbarSetting = {
  fixed: boolean;
  theme: string;
};

export type LayoutSetting = {
  sidebar: Record<"theme" | "bgImgUrl", string>;
  topbar: TopbarSetting;
};

export type Layout = "basicLayout";

export interface Settings {
  activeLayout: Layout;
  activeTheme: string;
  themes: Record<string, Theme>;
  layoutSetting: LayoutSetting;
}

export interface DefaultSettings {
  
}

export const defaultSettings: Settings = {
  activeLayout: "basicLayout",
  activeTheme: "light",
  themes: defaultThemes,
  layoutSetting: {
    sidebar: {
      theme: "light",
      bgImgUrl: "",
    },
    topbar: {
      fixed: true,
      theme: "light",
    },
  },
};
