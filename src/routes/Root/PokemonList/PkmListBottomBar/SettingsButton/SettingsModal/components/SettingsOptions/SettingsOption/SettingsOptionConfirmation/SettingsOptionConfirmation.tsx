import { useContext } from "react";

// Components
import * as S from "./SettingsOptionConfirmation.styles";

// Scripts
import { handleConfirmSettingApply } from "./handleConfirmSettingApply";

// Constants
import { savedPokemonsLocalStorageKey } from "@constants/localStorageAccessKeys";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { PokemonsContext } from "@context/PokemonsContext/PokemonsContext";

type SvgClickEvent = React.UIEvent<SVGAElement>;

const SettingsOptionConfirmation = ({ selector }: { selector: string }) => {
  const { dispatchPokemons } = useContext(PokemonsContext)!;
  const { activeTheme } = useContext(ThemeContext)!;

  const clearPkmList = () => {
    dispatchPokemons({ type: "CLEAR_LIST" });
    localStorage.removeItem(savedPokemonsLocalStorageKey);
  };

  return (
    <S.SettingsOptionConfirmationContainer
      className="confirm-setting-apply hidden"
      theme={activeTheme}
    >
      <S.Cancel
        onClick={(e: SvgClickEvent) =>
          handleConfirmSettingApply(e, false, selector)
        }
        theme={activeTheme}
      />

      <p>Are you sure?</p>

      <S.Confirm
        onClick={(e: SvgClickEvent) =>
          handleConfirmSettingApply(e, true, selector, clearPkmList)
        }
        theme={activeTheme}
      />
    </S.SettingsOptionConfirmationContainer>
  );
};

export { SettingsOptionConfirmation };
