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
    backgroundBorder: string;

    disabled: {
      background: string;
    };

    enabled: {
      background: string;
    };
  };
};

type TThemes = {
  [key in AcceptedThemes]: TTheme;
};

export type { AcceptedThemes, TTheme, TThemes };
