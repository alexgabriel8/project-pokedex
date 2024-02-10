import { useContext } from "react"

// Context
import { SettingsContext } from "../SettingsContext"

// Constants
import { defaultSettings } from "../defaultSettings";

// Types
import { Settings } from "@typings/settings.types";

const useUpdateSettingValue = (setting: keyof Settings, value: boolean) => {
    const { settings, setSettings } = useContext(SettingsContext)!;

    const validKeys = Object.keys(defaultSettings)

    if(!validKeys.includes(setting)) throw new Error(`Invalid setting: "${setting}"`);
    if (![true, false].includes(value)) throw new Error(`Invalid setting value: "${value}"`);

    const updateSettingValue = () => {
        setSettings({...settings, [setting]: !value})
    }

    return updateSettingValue
}

export { useUpdateSettingValue }