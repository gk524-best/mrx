import {} from "@material-ui/core/styles";



type MrxTheme = Record<string, object>;

export interface OptionsProps {
  theme: MrxTheme;
  private?: boolean;
}
