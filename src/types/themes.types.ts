type AcceptedThemes = "light" | "dark";

type TTheme = {
  name: string;
  primary: string;
  secondary: string;
  secondaryDarker: string;
  terciary: string;

  status: {
    danger: string;
    success: string;
  };

  modalTogglerButton: {
    circleBorder: string;
    circleBackground: string;
    backgroundDisabled: string;
    backgroundEnabled: string;
  };
};

type TThemes = {
  [key in AcceptedThemes]: TTheme;
};

export type { AcceptedThemes, TTheme, TThemes };
