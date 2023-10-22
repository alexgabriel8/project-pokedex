import { defaultPreferences } from "./defaultPreferences";

import {
  getLocalStorageItem,
  saveOnLocalStorage,
} from "../../scripts/localStorage";

import {
  TPreferences,
  AcceptedPreferences,
  isTypePreferences,
} from "./userPreferences.types";

const userPreferencesLocalStorageKey = "userPreferences";

const userPreferences = {
  preferences: {} as TPreferences,

  updatePreference(
    preference: keyof typeof AcceptedPreferences,
    value: boolean,
  ) {
    try {
      if (!AcceptedPreferences[preference as AcceptedPreferences])
        throw new Error(`Invalid preference: "${preference}"`);
      if (![false, true].includes(value))
        throw new Error(`Invalid preference value: ${value}`);

      this.preferences[preference as AcceptedPreferences] = value;
      saveOnLocalStorage(userPreferencesLocalStorageKey, this.preferences);
    } catch (err) {
      console.error(err);
    }
  },

  loadInitialPreferences() {
    const initialPreferences = getLocalStorageItem(
      userPreferencesLocalStorageKey,
    );

    this.preferences = isTypePreferences(initialPreferences)
      ? initialPreferences
      : { ...defaultPreferences };
  },
};

export { userPreferences, userPreferencesLocalStorageKey };
