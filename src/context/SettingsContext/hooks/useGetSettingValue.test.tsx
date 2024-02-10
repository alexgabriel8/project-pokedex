import { expect, it } from "vitest";
import { render } from "@testing-library/react";

// Hooks
import { useGetSettingValue } from "./useGetSettingValue";

// Constants
import { defaultSettings } from "../defaultSettings";

// Context provider
import { SettingsProvider } from "../SettingsContext";

// Types
import { Settings } from "@typings/settings.types";

const SettingValue = ({setting}: {setting: keyof Settings}) => (
    String(useGetSettingValue(setting))
)

it("Should return setting value", () => {
    const { getByText } = render(
        <SettingsProvider>
            <SettingValue setting="pkmAnimatedSprites" />
        </SettingsProvider>
    );
    
    getByText(String(defaultSettings.pkmAnimatedSprites))
})

it("Should throw error on invalid option", () => {
    expect(() =>
        render(
            <SettingsProvider>
                <SettingValue setting={"invalidOption" as keyof Settings} />
            </SettingsProvider>
        )
    ).toThrow(`Invalid setting: "invalidOption"`)
})