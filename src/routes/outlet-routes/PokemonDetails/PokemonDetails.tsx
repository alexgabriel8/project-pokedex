import { useContext } from "react";
import { useParams } from "react-router-dom";

import * as S from "./PokemonDetails.styles";

import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";

const PokemonDetails = () => {
  const params = useParams();
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.PokemonDetails theme={activeTheme}>
      <p>Pokemon {params.id} details</p>
    </S.PokemonDetails>
  );
};

export default PokemonDetails;
