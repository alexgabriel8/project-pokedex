import { useContext } from "react";

// Components
import * as S from "./PreviousNextPokemon.styles"
import { Link } from "react-router-dom";

// Hooks
import { useFetchAdjacentPokemon } from "./useFetchAdjacentPokemon";

// Context
import { ThemeContext } from "../../../../../../context/ThemeContext/ThemeContext";

type Props = {
    position: "left" | "right";
    pkmId: number;
}

const PreviousNextPokemon = ({position, pkmId}: Props) => {
    const { activeTheme } = useContext(ThemeContext)!;
    const [ pokemon, fetchError ] = useFetchAdjacentPokemon(pkmId);

    if(pkmId === 0) return <div></div>;

    return (
        <S.PreviousNextPokemonContainer className={`${position} ${typeof pokemon === "object" && "has-pokemon"}`}>
            <Link to={`/pokemon/${pkmId}`}>
                <S.ArrowIcon theme={activeTheme} className="arrow-icon" />
            </Link>

            {pokemon === "fetching" && <p>Fetching...</p>}
            {pokemon === "error" && <p>{fetchError as string}</p>}
            {typeof pokemon === "object" && (
                <>
                    <img
                        className="pokemon-sprite"
                        src={pokemon.sprites.static}
                        alt={`${pokemon.name}'s sprite`}
                    />
                    <p>
                        <span className="pokemon-name">
                            {pokemon.name.replace("-", " ")}
                        </span>
                        <br />
                        #{pokemon.id}
                    </p>
                </>
            )}
        </S.PreviousNextPokemonContainer>        
    )
}

export { PreviousNextPokemon }