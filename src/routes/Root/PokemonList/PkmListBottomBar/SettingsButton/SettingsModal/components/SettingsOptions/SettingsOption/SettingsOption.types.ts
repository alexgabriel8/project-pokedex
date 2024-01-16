type ToggleOption = {
    children: string;
    type: "toggle";
    settingValue: boolean;
    updateSetting: () => void;
    index: number;
}

type ConfirmOption = {
    children: string;
    type: "confirm";
    index: number;
}

type SettingsOptionProps = ToggleOption | ConfirmOption

export type { SettingsOptionProps}