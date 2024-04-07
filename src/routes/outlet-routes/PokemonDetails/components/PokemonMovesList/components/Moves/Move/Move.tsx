import { useContext } from "react";

// Components
import * as S from "./Move.styles";

// Scripts
import { handleMoveClick } from "./scripts/handleMoveClick";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

// Types
import * as PkmTypes from "@typings/pokemon.types";

const Move = ({ move }: { move: PkmTypes.Move }) => {
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.MoveContainer
      theme={activeTheme}
      onClick={(e) => handleMoveClick(e, move)}
    >
      <h3 className="move-name">{move.name.replace(/-/g, " ")}</h3>
      <p className="move-description"></p>
    </S.MoveContainer>
  );
};

export { Move };
