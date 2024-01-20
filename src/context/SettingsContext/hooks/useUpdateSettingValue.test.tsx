import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";

// Context
import { SettingsContext, SettingsProvider } from "../SettingsContext";

// Constants
import { defaultSettings } from "../defaultSettings";

// Hooks
import { useUpdateSettingValue } from "./useUpdateSettingValue";

const UpdateSettingValue = ({setting, value}) => {
    const { settings } = useContext(SettingsContext);

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

    const { getByText, findByText } = render(
        <SettingsProvider>
            <UpdateSettingValue setting="pkmAnimatedSprites" value={defaultSettings.pkmAnimatedSprites} />
        </SettingsProvider>
    )

    getByText(`value: ${defaultSettings.pkmAnimatedSprites}`)

    const toggleButton = getByText("Update")
    await user.click(toggleButton)

    await findByText(`value: ${!defaultSettings.pkmAnimatedSprites}`)
})

it("Should throw error on invalid setting name", () => {
    expect(() =>
        render(
            <SettingsProvider>
                <UpdateSettingValue setting="invalidSetting" value={true} />
            </SettingsProvider>
        )
    ).toThrow('Invalid setting: "invalidSetting"')
})

it("Should throw error on invalid setting value", () => {
    expect(() => 
        render(
            <SettingsProvider>
                <UpdateSettingValue setting="pkmAnimatedSprites" value="TRUE"/>
            </SettingsProvider>
        )
    ).toThrow('Invalid setting value: "TRUE"')
})