// Constants
import { getLocalStorageItem } from "@scripts/localStorage";
import { userSettingsLocalStorageKey } from "@constants/localStorageAccessKeys";
import { defaultSettings } from "../defaultSettings";

// Scripts
import { isValidSettings } from "./isValidSettings";

// Types
import { Settings } from "@typings/settings.types";

function loadInitialSettings() {
  let initialSettings = getLocalStorageItem(
    userSettingsLocalStorageKey,
  ) as unknown as Settings;
  if (!initialSettings || !isValidSettings(initialSettings))
    initialSettings = defaultSettings;

  return initialSettings;
}

export { loadInitialSettings };
