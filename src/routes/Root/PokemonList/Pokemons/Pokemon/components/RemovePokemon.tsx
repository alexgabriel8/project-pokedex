import { useContext } from "react";

// Components
import * as S from "./RemovePokemon.styles";

// Hooks
import { useRemovePokemon } from "../../../../../../context/PokemonsContext/hooks/useRemovePokemon";

// Context
import { ThemeContext } from "../../../../../../context/ThemeContext/ThemeContext";

type Props = {
    pkmIndex: number;
}
const RemovePokemon = ({pkmIndex}: Props) => {
    const { activeTheme } = useContext(ThemeContext)!;

    const removePokemon = useRemovePokemon(pkmIndex);
    const handleClick = () => removePokemon();

    return <S.RemovePokemonContainer
            onClick={handleClick}
            theme={activeTheme}
            className="remove-pkm"
           />   
}

export { RemovePokemon };
