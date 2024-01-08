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
      circleBackground: "#313131",
      backgroundDisabled: "#FFFFFF",
      backgroundEnabled: "#5C5C5C",
    },
  },

  dark: {
    name: "dark",
    primary: "#0B132B",
    secondary: "#292929",
    secondaryDarker: "#1B1A1A",
    terciary: "#D26DD2",

    status: {
      danger: "#E00025",
      success: "#05FF00",
    },

    modalTogglerButton: {
      circleBorder: "#BC59FF",
      circleBackground: "#9D28E3",
      backgroundDisabled: "#4C2E60",
      backgroundEnabled: "#BC59FF",
    },
  },
};

export { themes };
