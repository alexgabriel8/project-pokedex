import { useContext, useEffect } from "react";

// Components
import * as S from "./PokemonMovesList.styles";
import { PkmMovesListTopBar } from "./components/PkmMovesListTopBar/PkmMovesListTopBar"
import { Moves } from "./components/Moves/Moves";

// Scripts
import { handlePkmMovesListScroll } from "./scripts/handlePkmMovesListScroll";

// Scripts
import { moveListHasScroll } from "./scripts/moveListHasScroll";

// Types
import * as PkmTypes from "../../../../../types/pokemon.types"

// Context
import { ThemeContext } from "../../../../../context/ThemeContext/ThemeContext";

const PokemonMovesList = ({ moves }: {moves: PkmTypes.Move[]}) => {
    const { activeTheme } = useContext(ThemeContext)!

    useEffect(() => {
        moveListHasScroll()
    }, [])

    return (
        <S.PokemonMovesListContainer
            id="pokemon-moves-list"
            onScroll={handlePkmMovesListScroll}
            theme={activeTheme}
        >
            <PkmMovesListTopBar />
            <Moves moves={moves} />
        </S.PokemonMovesListContainer>        
    )
}

export { PokemonMovesList }
