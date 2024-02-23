import { useContext } from "react";

// Components
import * as S from "./Moves.styles";
import { Move } from "./Move/Move";
import { MoveContainer } from "./Move/Move.styles";

// Types
import * as PkmTypes from "@typings/pokemon.types";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const Moves = ({ moves }: { moves: PkmTypes.Move[] }) => {
  const { activeTheme } = useContext(ThemeContext)!;

  return moves.length === 0 ? (
    <S.MovesContainer>
      <MoveContainer theme={activeTheme} className="clicked">
        <h3 className="move-name">No moves available</h3>
      </MoveContainer>
    </S.MovesContainer>
  ) : (
    <S.MovesContainer id="pokemon-moves">
      {moves.map((move) => (
        <Move key={move.name} move={move} />
      ))}
    </S.MovesContainer>
  );
};

export { Moves };
