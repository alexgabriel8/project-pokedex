import { TThemes } from "./themes.types";

const themes: TThemes = {
  light: {
    name: "light",
    primary: "#DEDEDE",
    secondary: "#DC0A2D",
    secondaryDarker: "#900B21",
    terciary: "#32373B",

    status: {
      danger: "#DC0A2D",
      success: "#05FF00",
    },

    modalTogglerButton: {
      circleBorder: "#150F0F",
      backgroundBorder: "#313131",

      disabled: {
        background: "#FFFFFF",
      },

      enabled: {
        background: "#5C5C5C",
      },
    },
  },

  dark: {
    name: "dark",
    primary: "#0B132B",
    secondary: "#292929",
    secondaryDarker: "#1B1A1A",
    terciary: "#6D23A0",

    status: {
      danger: "#E00025",
      success: "#05FF00",
    },

    modalTogglerButton: {
      circleBorder: "#0F0F0F",
      backgroundBorder: "#731AA9",

      disabled: {
        background: "#4C2E60",
      },

      enabled: {
        background: "#BC59FF",
      },
    },
  },
};

export { themes };
