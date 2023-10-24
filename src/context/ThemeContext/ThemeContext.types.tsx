import { TTheme } from "../../constants/themes/themes.types";

type TThemeContext = {
  activeTheme: TTheme;
  setActiveTheme: React.Dispatch<React.SetStateAction<TTheme>>;
};

export type { TThemeContext };
