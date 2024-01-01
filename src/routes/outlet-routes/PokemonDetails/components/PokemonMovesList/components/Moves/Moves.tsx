// Components
import * as S from "./Moves.styles"
import { Move } from "./Move/Move"

// Types
import * as PkmTypes from "../../../../../../../types/pokemon.types"

const Moves = ({ moves }: {moves: PkmTypes.Move[]}) => {
    return (
        <S.MovesContainer id="pokemon-moves">
            {
                moves.map((move) => (
                    <Move key={move.name} move={move} />
                ))
            }
        </S.MovesContainer>
    )
}

export { Moves }
