import { createContext, useState } from "react";

// Scripts
import { loadInitialSettings } from "./scripts/loadInitialSettings";

// Types
import { Settings } from "@typings/settings.types";

const initialPreferences = loadInitialSettings();

type SettingsContext = {
    settings: Settings;
    setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}

const SettingsContext = createContext<SettingsContext | null>(null);

const SettingsProvider = ({children}: React.PropsWithChildren) => {
    const [ settings, setSettings ] = useState(initialPreferences);

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}


export { SettingsContext, SettingsProvider }