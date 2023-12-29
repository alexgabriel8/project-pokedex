import { useContext } from "react";

// Components
import * as S from "./PokemonAbilities.styles";
import { PokemonAbility } from "./PokemonAbility/PokemonAbility";

// Context
import { ThemeContext } from "../../../../../context/ThemeContext/ThemeContext";

// Types
import { Ability } from "../../../../../types/pokemon.types";

const PokemonAbilities = ({abilities}: {abilities: Ability[]}) => {
    const { activeTheme } = useContext(ThemeContext)!;
    return (
        <S.PkmAbilitiesWrapper>
            <h2 className="title">Abilities</h2>
            <S.PkmAbilities>
                {
                    abilities.map((ability, i) => (
                        <PokemonAbility
                            index={i}
                            key={ability.name + i}
                            ability={ability}
                            theme={activeTheme}
                        />
                    ))
                }
            </S.PkmAbilities>
        </S.PkmAbilitiesWrapper>
    )
}

export { PokemonAbilities }