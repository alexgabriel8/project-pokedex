import { useContext } from "react";

// Components
import * as S from "./SettingsOption.styles";
import { SettingsOptionConfirmation } from "./SettingsOptionConfirmation/SettingsOptionConfirmation";
import { ToggleButton, ToggleButtonCircle } from "@components/ToggleButton";

// Scripts
import { handleToggleOptionclick } from "./scripts/handleToggleOptionClick";
import { handleConfirmOptionClick } from "./scripts/handleConfirmOptionClick";

// Hooks
import { useUpdateSettingValue } from "@context/SettingsContext/hooks/useUpdateSettingValue";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

// Types
import { SettingsOptionProps } from "./SettingsOption.types";

const SettingsOption = (props: SettingsOptionProps) => {
  const { activeTheme } = useContext(ThemeContext)!;

  let updateSettingValue: null | (() => void) = null;
  if (props.type === "toggle")
    updateSettingValue = useUpdateSettingValue(
      props.setting,
      props.settingValue,
    );

  const selector = `setting-option-${props.index + 1}`;

  return (
    <S.SettingsOptionContainer
      id={selector}
      theme={activeTheme}
      onClick={
        props.type === "toggle"
          ? (e) => handleToggleOptionclick(e, updateSettingValue!)
          : handleConfirmOptionClick
      }
    >
      <p>{props.children}</p>
      {props.type === "toggle" && (
        <ToggleButton
          className={`toggler-icon ${
            props.settingValue === true ? "toggled" : ""
          }`}
          theme={activeTheme}
        >
          <ToggleButtonCircle className="toggler-circle" theme={activeTheme} />
        </ToggleButton>
      )}
      {props.type === "confirm" && (
        <SettingsOptionConfirmation selector={selector} />
      )}
    </S.SettingsOptionContainer>
  );
};

export { SettingsOption };
