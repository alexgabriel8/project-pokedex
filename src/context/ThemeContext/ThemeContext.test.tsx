import { afterEach, describe, it, expect } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useContext } from "react";

// Context
import { ThemeContext, ThemeProvider } from "./ThemeContext";

// Constants
import { themes } from "@constants/themes/themes";
import { lastUsedThemeLocalStorageKey } from "@constants/localStorageAccessKeys";

// Mocks
import { matchMediaMock } from "@tests/mocks/matchMediaMock";

describe("Theme Provider", () => {
  afterEach(() => {
    localStorage.clear();
    cleanup();
  });

  it("Should pass theme through Context", () => {
    matchMediaMock.true();

    const ThemedParagraph = () => {
      const { activeTheme } = useContext(ThemeContext)!;

      return <p>{activeTheme.name}</p>;
    };

    const { getByText } = render(
      <ThemeProvider>
        <ThemedParagraph />
      </ThemeProvider>,
    );

    getByText(`${themes.light.name}`);
  });

  it("Should switch theme when setActiveTheme is used and save it to Local Storage", async () => {
    matchMediaMock.true();
    const user = userEvent.setup();

    const ThemeToggler = () => {
      const { activeTheme, setActiveTheme } = useContext(ThemeContext)!;

      return (
        <>
          <button onClick={() => setActiveTheme(themes.dark)}>
            Toggle theme
          </button>
          <p>Current theme: {activeTheme.name}</p>
        </>
      );
    };

    const { getByText } = render(
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>,
    );

    const togglerButton = getByText("Toggle theme");
    await user.click(togglerButton);

    getByText("Current theme: dark");
    expect(localStorage.getItem(lastUsedThemeLocalStorageKey)).toStrictEqual(
      themes.dark.name,
    );
  });
});
