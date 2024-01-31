import { useContext } from "react";

// Components
import * as S from "./Pokemon.styles";
import { RemovePokemon } from "./components/RemovePokemon";

// Context
import { ThemeContext } from "../../../../../context/ThemeContext/ThemeContext";
import { SettingsContext } from "../../../../../context/SettingsContext/SettingsContext";

// Types
import { IPokemon } from "../../../../../types/pokemon.types";

// Scripts
import { pkmNameToUppercase } from "./pkmNameToUppercase";

type Props = {
  pokemon: IPokemon;
  pkmIndex: number;
}

const Pokemon = ({ pokemon, pkmIndex }: Props) => {
  const { activeTheme } = useContext(ThemeContext)!;
  const { settings } = useContext(SettingsContext)!;

  const uppercasePkmName = pkmNameToUppercase(pokemon.name);
  const prefersAnimatedSprites = settings.pkmAnimatedSprites;
  const hasAnimatedSprite = !!pokemon.sprites.animated;

  return (
    <>
      <S.Li >
        <S.NavLink
          theme={activeTheme}
          $pkmTypes={pokemon.types}
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
        <RemovePokemon pkmIndex={pkmIndex} />
      </S.Li>
    </>
  );
};

export { Pokemon };
