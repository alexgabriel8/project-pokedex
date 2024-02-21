import { useContext } from "react";

// Components
import * as S from "./PkmListBottomBar.styles";
import { BottomBarToggler } from "./BottomBarToggler/BottomBarToggler";
import { AddPkmByInput } from "./AddPkmByInput/AddPkmByInput";
import { AddPkmByAmount } from "./AddPkmByAmount/AddPkmByAmount";
import { PokemonFilters } from "./PokemonFilters/PokemonFilters";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler";
import { SettingsButton } from "./SettingsButton/SettingsButton";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

type Props = {
  addPkmsByAmountToList: (input: number) => Promise<void>;
  addPkmByInputToList: (input: string) => Promise<void>;
};

const PkmListBottomBar = (props: Props) => {
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.BottomBarWrapper>
      <BottomBarToggler />
      <S.PkmListBottomBar theme={activeTheme} className="list-bottom-bar">
        <S.PkmAddersWrapper>
          <AddPkmByInput addPkmByInputToList={props.addPkmByInputToList} />
          <AddPkmByAmount addPkmsByAmountToList={props.addPkmsByAmountToList} />
        </S.PkmAddersWrapper>
        <PokemonFilters />
        <ThemeToggler />
        <SettingsButton />
      </S.PkmListBottomBar>
    </S.BottomBarWrapper>
  );
};

export { PkmListBottomBar };
