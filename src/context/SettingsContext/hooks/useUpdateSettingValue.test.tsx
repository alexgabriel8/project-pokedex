import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";

// Context
import { SettingsContext, SettingsProvider } from "../SettingsContext";

// Constants
import { defaultSettings } from "../defaultSettings";

// Hooks
import { useUpdateSettingValue } from "./useUpdateSettingValue";

// Types
import { Settings } from "@typings/settings.types";

const UpdateSettingValue = ({setting, value}: {setting: keyof Settings, value: boolean}) => {
    const { settings } = useContext(SettingsContext)!;

    const updateValue = useUpdateSettingValue(setting, value)
    
    return(
        <>
            <p>value: {String(settings[setting])}</p>
            <button onClick={updateValue}>Update</button>
        </>
    )
}

it("Should update setting value", async () => {
    const user = userEvent.setup();

    render(
        <SettingsProvider>
            <UpdateSettingValue setting="pkmAnimatedSprites" value={defaultSettings.pkmAnimatedSprites} />
        </SettingsProvider>
    )

    screen.getByText(`value: ${defaultSettings.pkmAnimatedSprites}`)

    const toggleButton = screen.getByText("Update")
    await user.click(toggleButton)

    await screen.findByText(`value: ${!defaultSettings.pkmAnimatedSprites}`)
})

it("Should throw error on invalid setting name", () => {
    expect(() =>
        render(
            <SettingsProvider>
                <UpdateSettingValue setting={"invalidSetting" as keyof Settings} value={true} />
            </SettingsProvider>
        )
    ).toThrow('Invalid setting: "invalidSetting"')
})

it("Should throw error on invalid setting value", () => {
    expect(() => 
        render(
            <SettingsProvider>
                <UpdateSettingValue setting="pkmAnimatedSprites" value={"TRUE" as unknown as boolean}/>
            </SettingsProvider>
        )
    ).toThrow('Invalid setting value: "TRUE"')
})