import { useContext, useEffect } from "react"

// Scripts
import { saveOnLocalStorage } from "../../../../../../../scripts/localStorage";

// Contexts
import { SettingsContext } from "../../../../../../../context/SettingsContext/SettingsContext"

// Constants
import { userSettingsLocalStorageKey } from "../../../../../../../constants/localStorageAccessKeys";

const useSaveSettingsToLocalStorage = () => {
    const { settings } = useContext(SettingsContext)!;

    useEffect(() => {
        saveOnLocalStorage(userSettingsLocalStorageKey, settings);
    })
}

export { useSaveSettingsToLocalStorage }