import { useContext, useState } from "react";
import { createPortal } from "react-dom";

// Components
import * as S from "./SettingsButton.styles";
import { SettingsModal } from "./SettingsModal/SettingsModal";

// Scripts
import { useOpenSettings } from "./hooks/useOpenSettings";
import { useCloseSettings } from "./hooks/useCloseSettings";

// Contexts
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const SettingsButton = () => {
  const { activeTheme } = useContext(ThemeContext)!;
  const [showModal, setShowModal] = useState(false);

  const openSettings = useOpenSettings(setShowModal);
  const closeSettings = useCloseSettings(setShowModal);

  return (
    <S.SettingsButtonContainer
      id="settings-button"
      onClick={openSettings}
      theme={activeTheme}
    >
      <S.GearIcon theme={activeTheme} />
      {showModal &&
        createPortal(
          <SettingsModal closeSettings={closeSettings} />,
          document.querySelector("#root")!,
        )}
    </S.SettingsButtonContainer>
  );
};

export { SettingsButton };
