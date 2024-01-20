import { useContext } from "react"

// Constants
import { defaultSettings } from "../defaultSettings";

// Contexts
import { SettingsContext } from "../SettingsContext"

// Types
import { Settings } from "../../../types/settings.types";

const useGetSettingValue = (setting: keyof Settings) => {
    const { settings } = useContext(SettingsContext)!;
    
    const validOptions = Object.keys(defaultSettings);
    if(!validOptions.includes(setting)) throw new Error(`Invalid setting: "${setting}"`)

    return settings[setting]
}

export { useGetSettingValue }