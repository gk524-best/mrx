import { DefaultSettings, Settings } from './settings';

export interface MrxThemeProviderProps<Settings = DefaultSettings> {
  children?: React.ReactNode;
  settings: Partial<Settings>;
}

export default function MrxThemeProvider<S = DefaultSettings>(
  props: MrxThemeProviderProps<S>
): React.ReactElement<MrxThemeProviderProps<S>>;