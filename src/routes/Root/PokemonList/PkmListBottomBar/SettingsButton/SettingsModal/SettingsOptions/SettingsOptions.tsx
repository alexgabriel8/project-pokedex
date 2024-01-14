import { useContext } from "react";

// Components
import { SettingsOption } from "./SettingsOption/SettingsOption";

// Context
import { SettingsContext } from "../../../../../../../context/SettingsContext/SettingsContext";

// Hooks
import { useGetSettingValue } from "../../../../../../../context/SettingsContext/hooks/useGetSettingValue";

// Types
import { Settings } from "../../../../../../../types/settings.types";

const SettingsOptions = () => {
    const { settings, setSettings } = useContext(SettingsContext)!;

    const updateSetting = (setting: keyof Settings, settingValue: boolean) => {
        setSettings({...settings, [setting]: !settingValue})
    }
    
    const animatedSprites = useGetSettingValue("pkmAnimatedSprites");
    const saveListInLocalStorage = useGetSettingValue("savePkmListInLocalStorage");

    return (
        <ul>
            <SettingsOption
                type="toggle"
                index={0}
                settingValue={animatedSprites}
                updateSetting={() => updateSetting("pkmAnimatedSprites", settings.pkmAnimatedSprites)}
            >
                Show animated sprites
            </SettingsOption>

            <SettingsOption
                type="toggle"
                index={1}
                settingValue={saveListInLocalStorage}
                updateSetting={() => updateSetting("savePkmListInLocalStorage", settings.savePkmListInLocalStorage)}
            >
                Save list in machine
            </SettingsOption>

            <SettingsOption
                type="confirm"
                index={2}
            >
                Clear list
            </SettingsOption>
        </ul>
    )
}

export { SettingsOptions }