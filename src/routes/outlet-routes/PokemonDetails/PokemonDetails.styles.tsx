import styled from "styled-components";

// Constants
import { pokemonTypeColorCodes } from "@constants/pokemonTypeColorCodes";

// Styles
import { OutletRoute } from "@styles/OutletRoute";

// Types
import * as TPokemon from "@typings/pokemon.types";
import { TTheme } from "@typings/themes.types";

type Props = {
  theme: TTheme;
}

const PokemonDetails = styled(OutletRoute)<Props>`
  gap: 5px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => (props.theme.name === "light" ? "black" : "white")};
`;

const Artwork = styled.img`
  max-width: calc(250px + 10vw);
`;

const DetailedPkmName = styled.h2`
  span {
    font-weight: 400;
  }
`;

const Genus = styled.p`
  span {
    text-transform: capitalize;
    font-weight: bold;
  }
`;

type TypesProps = {
  $types: TPokemon.Types;
};

const Types = styled.ul<TypesProps>`
  margin: 10px 0;
  display: flex;
  gap: 10px;

  li {
    min-width: 100px;
    font-size: clamp(1rem, 0.8rem + 0.5vw, 1.5rem);
    color: white;
    padding: 10px;
    border-radius: 15px;
    text-shadow: 0 0 5px #000000a0;
    text-transform: capitalize;
  }

  .primary-type {
    background-color: ${({ $types }) => pokemonTypeColorCodes[$types.primary]};
  }

  .secondary-type {
    background-color: ${({ $types }) =>
      $types.secondary ? pokemonTypeColorCodes[$types.secondary] : ""};
  }
`;

const PokemonDescription = styled.p`
  max-width: 1200px;
  margin: 10px 0;
`;

const PokemonInfoInRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  text-transform: capitalize;
  width: 100%;
  max-width: 1800px;
  margin: 10px 0;

  .measure {
    text-transform: lowercase;
  }

  .generation {
    text-transform: uppercase;
  }
`;

export {
  PokemonDetails,
  Artwork,
  DetailedPkmName,
  Genus,
  Types,
  PokemonDescription,
  PokemonInfoInRow,
};
