// Components
import { SettingsOption } from "./SettingsOption/SettingsOption";

// Hooks
import { useGetSettingValue } from "@context/SettingsContext/hooks/useGetSettingValue";

const SettingsOptions = () => {
  const animatedSprites = useGetSettingValue("pkmAnimatedSprites");
  const saveListInLocalStorage = useGetSettingValue(
    "savePkmListInLocalStorage",
  );

  return (
    <ul>
      <SettingsOption
        type="toggle"
        index={0}
        setting="pkmAnimatedSprites"
        settingValue={animatedSprites}
      >
        Show animated sprites
      </SettingsOption>

      <SettingsOption
        type="toggle"
        index={1}
        setting="savePkmListInLocalStorage"
        settingValue={saveListInLocalStorage}
      >
        Save list in machine
      </SettingsOption>

      <SettingsOption type="confirm" index={2}>
        Clear list
      </SettingsOption>
    </ul>
  );
};

export { SettingsOptions };
