// Constants
import { defaultSettings } from "../defaultSettings";

// Types
import { Settings } from "../../../types/settings.types";

function hasAllKeys(expectedKeys: string[], keys: string[]) {
    for(const key of keys)
        if(!expectedKeys.includes(key)) return false;

    return true
}

function isValidSettings(settings: unknown): settings is Settings {
    if (!settings || typeof settings !== "object") return false;

    const expectedKeys = Object.keys(defaultSettings);
    const keys = Object.keys(settings);
    if(keys.length !== expectedKeys.length) return false;

    if(hasAllKeys(expectedKeys, keys)) return true;
    else return false;
}

export { isValidSettings }