import { useContext } from "react";

// Components
import * as S from "./Pokemon.styles";

// Context
import { ThemeContext } from "../../../../../context/ThemeContext/ThemeContext";

// Types
import { IPokemon } from "../../../../../types/pokemon.types";

// Scripts
import { pkmNameToUppercase } from "./pkmNameToUppercase";

const Pokemon = ({ pokemon }: { pokemon: IPokemon }) => {
  const { activeTheme } = useContext(ThemeContext)!;

  const uppercasePkmName = pkmNameToUppercase(pokemon.name);
  const prefersAnimatedSprites = true;
  const hasAnimatedSprite = !!pokemon.sprites.animated;

  return (
    <>
      <S.Li $pkmTypes={pokemon.types}>
        <S.NavLink
          theme={activeTheme}
          to={`pokemon/${pokemon.id}`}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <S.ImgWrapper
            className={
              prefersAnimatedSprites && hasAnimatedSprite ? "animated" : ""
            }
          >
            <img
              src={
                prefersAnimatedSprites && hasAnimatedSprite
                  ? (pokemon.sprites.animated as string) // TS doesn't know it can't be null
                  : pokemon.sprites.static
              }
              alt={uppercasePkmName + " image"}
            />
          </S.ImgWrapper>
          <S.PokemonName className="name">{uppercasePkmName}</S.PokemonName>
          <S.PokemonId className="id">#{pokemon.id}</S.PokemonId>
        </S.NavLink>
      </S.Li>
    </>
  );
};

export { Pokemon };
