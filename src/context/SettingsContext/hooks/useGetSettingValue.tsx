import { useContext } from "react"

// Contexts
import { SettingsContext } from "../SettingsContext"

// Types
import { Settings } from "../../../types/settings.types";

const useGetSettingValue = (setting: keyof Settings) => {
    const { settings } = useContext(SettingsContext)!;

    return settings[setting]
}

export { useGetSettingValue }