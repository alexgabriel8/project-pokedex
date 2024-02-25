import { useContext, useEffect } from "react";

// Components
import * as S from "./PokemonMovesList.styles";
import { PkmMovesListTopBar } from "./components/PkmMovesListTopBar/PkmMovesListTopBar";
import { Moves } from "./components/Moves/Moves";

// Scripts
import { addShadowToMoveList } from "./scripts/addShadowToMoveList";

// Types
import * as PkmTypes from "@typings/pokemon.types";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const PokemonMovesList = ({ moves }: { moves: PkmTypes.Move[] }) => {
  const { activeTheme } = useContext(ThemeContext)!;

  useEffect(() => {
    const moveList = document.querySelector("#pokemon-moves-list")!;
    addShadowToMoveList(moveList);
  }, [activeTheme]);

  const handleScroll = (e: React.UIEvent) => {
    addShadowToMoveList(e.currentTarget);
  };

  return (
    <S.PokemonMovesListContainer
      id="pokemon-moves-list"
      onScroll={handleScroll}
      theme={activeTheme}
    >
      <PkmMovesListTopBar />
      <Moves moves={moves} />
    </S.PokemonMovesListContainer>
  );
};

export { PokemonMovesList };
