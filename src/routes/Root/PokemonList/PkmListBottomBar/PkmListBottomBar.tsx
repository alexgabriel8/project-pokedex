import { useContext } from "react";

// Components
import { BottomBarToggler } from "./BottomBarToggler/BottomBarToggler";
import { AddPkmByInput } from "./AddPkmByInput/AddPkmByInput";
import { AddPkmByAmount } from "./AddPkmByAmount/AddPkmByAmount";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler";
import { SettingsButton } from "./SettingsButton/SettingsButton";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

// Components
import * as S from "./PkmListBottomBar.styles";

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
        <ThemeToggler />
        <SettingsButton />
      </S.PkmListBottomBar>
    </S.BottomBarWrapper>
  );
};

export { PkmListBottomBar };
