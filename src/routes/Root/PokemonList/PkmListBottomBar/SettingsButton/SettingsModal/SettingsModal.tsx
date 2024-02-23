import { useContext } from "react";

// Components
import * as S from "./SettingsModal.styles";
import { SettingsOptions } from "./components/SettingsOptions/SettingsOptions";

// Hooks
import { useSaveSettingsToLocalStorage } from "./hooks/useSaveSettingsToLocalStorage";

// Contexts
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

type Props = {
  closeSettings: React.MouseEventHandler;
};

const SettingsModal = ({ closeSettings }: Props) => {
  const { activeTheme } = useContext(ThemeContext)!;

  useSaveSettingsToLocalStorage();

  return (
    <S.SettingsModalWrapper id="settings-modal" onClick={closeSettings}>
      <S.SettingsModalContainer
        onClick={(e) => e.stopPropagation()}
        theme={activeTheme}
      >
        <S.CloseSettings onClick={closeSettings} theme={activeTheme} />
        <SettingsOptions />
      </S.SettingsModalContainer>
    </S.SettingsModalWrapper>
  );
};

export { SettingsModal };
