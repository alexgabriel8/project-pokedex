import { Settings } from "@typings/settings.types";

type ToggleOption = {
  children: string;
  type: "toggle";
  setting: keyof Settings;
  settingValue: boolean;
  index: number;
};

type ConfirmOption = {
  children: string;
  type: "confirm";
  index: number;
};

type SettingsOptionProps = ToggleOption | ConfirmOption;

export type { SettingsOptionProps };
