enum AcceptedPreferences {
  pkmAnimatedSprites = "pkmAnimatedSprites",
  savePkmListInLocalStorage = "savePkmListInLocalStorage",
}

type TPreferences = {
  -readonly [key in keyof typeof AcceptedPreferences]: boolean;
};

function isTypePreferences(object: any): object is TPreferences {
  if (!object || typeof object !== "object") return false;

  const expectedKeys = Object.keys(AcceptedPreferences);
  const objectKeys = Object.keys(object);

  for (const key in objectKeys)
    if (!expectedKeys.includes(objectKeys[key])) return false;

  return true;
}

export type { TPreferences };
export { AcceptedPreferences, isTypePreferences };
