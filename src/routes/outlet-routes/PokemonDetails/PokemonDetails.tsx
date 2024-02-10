import { useContext } from "react";
import { useParams } from "react-router-dom";

// Components
import * as S from "./PokemonDetails.styles";
import { PokemonStats } from "./components/PokemonStats/PokemonStats";
import { PokemonMovesList } from "./components/PokemonMovesList/PokemonMovesList";
import { PreviousNextPokemons } from "./components/PreviousNextPokemons/PreviousNextPokemons";

// Scripts
import { pkmNameToUppercase } from "@routes/Root/PokemonList/Pokemons/Pokemon/pkmNameToUppercase";

// Hooks
import { useFetchPkmWithSpecies } from "./hooks/useFetchPkmWithSpecies";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

// Types
import { PokemonAbilities } from "./components/PokemonAbilities/PokemonAbilities";

const PokemonDetails = () => {
  const { activeTheme } = useContext(ThemeContext)!;

  const urlId = useParams().id!;
  const [pokemon, fetchError] = useFetchPkmWithSpecies(urlId);

  if (pokemon === "loading") {
    return (
      <S.PokemonDetails theme={activeTheme}>
        <h2>Fetching Pokémon {urlId} details...</h2>
      </S.PokemonDetails>
    );
  } else if (pokemon === "error") {
    return (
      <S.PokemonDetails theme={activeTheme}>
        <h2>Failed to fetch Pokémon {urlId}</h2>
        <p>
          <code>{fetchError as string}</code>
        </p>
      </S.PokemonDetails>
    );
  } else if (typeof pokemon === "object") {
    const { name, id, height, weight } = pokemon;
    const artwork = pokemon.sprites.artwork;
    const sprite = pokemon.sprites.static;
    const genus = pokemon.speciesInfo!.genera;
    const primaryType = pokemon.types.primary;
    const secondaryType = pokemon.types.secondary;
    const habitat = pokemon.speciesInfo?.habitat.replace("-", " ");
    const generation = pokemon.speciesInfo?.generation;
    const description = pokemon.speciesInfo?.description.replace("", " ");
    {
      /* The API is sending "U+000c" in the Pkm description for some reason. */
    }

    return (
      <S.PokemonDetails theme={activeTheme}>
        <PreviousNextPokemons currentPkmId={pokemon.id} />
        {
          artwork
            ? <S.Artwork src={artwork} alt={`${name}'s artwork`} />
            : sprite
              ? <S.Artwork src={sprite} alt={`${name}'s sprite`} />
              : <p style={{color: activeTheme.status.danger}}>No image available</p>
        }
        <S.DetailedPkmName>
          {pkmNameToUppercase(name)} <span className="id">#{id}</span>
        </S.DetailedPkmName>
        <S.Genus>
          <span>{genus}</span> Pokémon
        </S.Genus>
        <S.Types $types={pokemon.types}>
          <li className="primary-type">{primaryType}</li>
          {secondaryType ? (
            <li className="secondary-type">{secondaryType}</li>
          ) : (
            ""
          )}
        </S.Types>
        <PokemonStats stats={pokemon.stats} />
        <S.PokemonInfoInRow>
          <p>
            <b>Habitat</b>: {habitat}
          </p>
          <p>
            <b>Height</b>: {height} <span className="measure">m</span>
          </p>
          <p>
            <b>Weight</b>: {weight.toLocaleString()}
            <span className="measure">kg</span>
          </p>
          <p>
            <b>Generation</b>: <span className="generation">{generation}</span>
          </p>
        </S.PokemonInfoInRow>
        <S.PokemonDescription>{description}</S.PokemonDescription>
        <PokemonAbilities abilities={pokemon.abilities} />
        <PokemonMovesList moves={pokemon.moves}/>
      </S.PokemonDetails>
    );
  }
};

export default PokemonDetails;
