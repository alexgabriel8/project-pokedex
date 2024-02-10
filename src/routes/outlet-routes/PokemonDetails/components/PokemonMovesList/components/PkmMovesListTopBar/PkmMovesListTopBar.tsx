import { useContext } from "react"

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext"

// Styles
import * as S from "./PkmMovesListTopBar.styles"

const PkmMovesListTopBar = () => {
    const { activeTheme } = useContext(ThemeContext)!;

    return (
        <S.PkmMovesListTopBarContainer theme={activeTheme}>
            <h2>Moves</h2>
        </S.PkmMovesListTopBarContainer>
    )
}


export { PkmMovesListTopBar }