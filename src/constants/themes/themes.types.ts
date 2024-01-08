import { themes } from "./themes";

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

function isTypeTTheme(object: any): object is TTheme {
  if (typeof object !== "object" || !object) return false;

  function bothHaveSameProperties(
    objectKeys: any,
    expectedKeys: Array<string>,
  ) {
    if (expectedKeys.length !== objectKeys.length) return false;

    for (const key in expectedKeys)
      if (!objectKeys[key] || typeof objectKeys[key] !== "string") return false;

    return true;
  }

  if (!bothHaveSameProperties(Object.keys(object), Object.keys(themes.light)))
    return false;
  else if (
    !bothHaveSameProperties(
      Object.keys(object.status),
      Object.keys(themes.light.status),
    )
  )
    return false;
  else if (
    !bothHaveSameProperties(
      Object.keys(object.modalTogglerButton),
      Object.keys(themes.light.modalTogglerButton),
    )
  )
    return false;

  return true;
}

export type { AcceptedThemes, TTheme, TThemes };
export { isTypeTTheme };
