type AcceptedThemes = "light" | "dark";

type ThemeProperties = {
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
    backgroundBorder: string;

    disabled: {
      background: string;
    };

    enabled: {
      background: string;
    };
  };
};

type TTheme = {
  AcceptedThemes: ThemeProperties;
};

type TThemes = {
  [key in AcceptedThemes]: ThemeProperties;
};

export type { AcceptedThemes, ThemeProperties, TTheme, TThemes };
