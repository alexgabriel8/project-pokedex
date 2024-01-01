import { useContext } from "react"
import * as S from "./PkmMovesListTopBar.styles"
import { ThemeContext } from "../../../../../../../context/ThemeContext/ThemeContext"

const PkmMovesListTopBar = () => {
    const { activeTheme } = useContext(ThemeContext)!;

    return (
        <S.PkmMovesListTopBarContainer theme={activeTheme}>
            <h2>Moves</h2>
        </S.PkmMovesListTopBarContainer>
    )
}


export { PkmMovesListTopBar }