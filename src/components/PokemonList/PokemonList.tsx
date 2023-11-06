import { useContext } from "react";

import { PkmListTopBar } from "./PkmListTopBar/PkmListTopBar";
import { Pokemons } from "./Pokemons/Pokemons";
import { PkmListBottomBar } from "./PkmListBottomBar/PkmListBottomBar";
import * as S from "./PokemonList.styles";

import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const PokemonList = () => {
  const { activeTheme } = useContext(ThemeContext)!;
  return (
    <S.PokemonList className="pokemon-list hidden" theme={activeTheme}>
      <PkmListTopBar />
      <Pokemons />
      <PkmListBottomBar />
    </S.PokemonList>
  );
};

export { PokemonList };
