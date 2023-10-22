import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { userPreferences } from "./userPreferences";

import { userPreferencesLocalStorageKey } from "./userPreferences";
import { defaultPreferences } from "./defaultPreferences";
import { AcceptedPreferences } from "./userPreferences.types";

describe("Load initial preferences", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("Should load default preferences if none in Local Storage", () => {
    userPreferences.loadInitialPreferences();

    expect(userPreferences.preferences).toStrictEqual(defaultPreferences);
  });

  it("Should load preferences if saved in Local Storage", () => {
    let samplePreferences = { ...defaultPreferences };
    for (const pref in samplePreferences) {
      samplePreferences[pref as AcceptedPreferences] =
        !samplePreferences[pref as AcceptedPreferences];
    }

    localStorage.setItem(
      userPreferencesLocalStorageKey,
      JSON.stringify(samplePreferences),
    );
    userPreferences.loadInitialPreferences();

    expect(userPreferences.preferences).toStrictEqual(samplePreferences);
    expect(userPreferences.preferences).not.toStrictEqual(defaultPreferences);
  });
  it("Should not load invalid preferences if saved in Local Storage", () => {
    let invalidPreferences = { ...defaultPreferences } as any;
    invalidPreferences.invalidProperty = true;

    localStorage.setItem(
      userPreferencesLocalStorageKey,
      JSON.stringify(invalidPreferences),
    );
    userPreferences.loadInitialPreferences();

    expect(userPreferences.preferences).not.toStrictEqual(invalidPreferences);
    expect(userPreferences.preferences).toStrictEqual(defaultPreferences);
  });
});

describe("Updating preferences", () => {
  beforeEach(() => {
    userPreferences.loadInitialPreferences();
  });
  afterEach(() => {
    localStorage.clear();
  });

  it("Should not update if preference argument is invalid", () => {
    userPreferences.updatePreference("invalidArgument" as any, false);

    expect(userPreferences.preferences).toStrictEqual(defaultPreferences);
  });

  it("Should not update if preference value is invalid", () => {
    userPreferences.updatePreference("pkmAnimatedSprites", "false" as any);

    expect(userPreferences.preferences).toStrictEqual(defaultPreferences);
  });
  it("Should update 'pkmAnimatedSprites' and save in Local Storage", () => {
    userPreferences.updatePreference(
      "pkmAnimatedSprites",
      !defaultPreferences.pkmAnimatedSprites,
    );

    expect(userPreferences.preferences).not.toStrictEqual(defaultPreferences);
    expect(userPreferences.preferences).toStrictEqual(
      JSON.parse(localStorage.getItem(userPreferencesLocalStorageKey)!),
    );
  });
  it("Should update 'savePkmListInLocalStorage' and save in Local Storage", () => {
    userPreferences.updatePreference(
      "savePkmListInLocalStorage",
      !defaultPreferences.savePkmListInLocalStorage,
    );

    expect(userPreferences.preferences).not.toStrictEqual(defaultPreferences);
    expect(userPreferences.preferences).toStrictEqual(
      JSON.parse(localStorage.getItem(userPreferencesLocalStorageKey)!),
    );
  });
});
