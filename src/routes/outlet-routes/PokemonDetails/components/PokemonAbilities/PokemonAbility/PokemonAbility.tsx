// Components
import * as S from "./PokemonAbility.styles";

// Scripts
import { handleAbilityDescriptionScroll } from "./scripts/handleAbilityDescriptionScroll";

// Types
import { TTheme } from "../../../../../../constants/themes/themes.types";
import { Ability } from "../../../../../../types/pokemon.types";
import { useFetchPkmAbilityDescription } from "./hooks/useFetchPkmAbility";
import { useAbilityHasScrolling } from "./hooks/useAbilityHasScrolling";

type Props = {
    ability: Ability;
    theme: TTheme;
    index: number;
}
const PokemonAbility = ({ ability, theme, index }: Props) => {
    const [abilityDesc, fetchError] = useFetchPkmAbilityDescription(ability);

    useAbilityHasScrolling(abilityDesc, index);
    
    return (
        <S.PokemonAbility
            theme={theme}
            id={`ability-${index + 1}`}
        >
            {
                ability.isHidden
                    ? <p className="transparent-text-with-shadow">Hidden Ability</p>
                    : ""
            }
            <h3 className="ability-name">
                {ability.name.replace("-", " ")}
            </h3>
            <p className="ability-description" onScroll={handleAbilityDescriptionScroll}>
                {
                    !fetchError === false
                        ? fetchError
                        : abilityDesc !== "loading"
                            ? abilityDesc || ability.description
                            : "Fetching..."
                }
            </p>
        </S.PokemonAbility>
    )
}

export { PokemonAbility }