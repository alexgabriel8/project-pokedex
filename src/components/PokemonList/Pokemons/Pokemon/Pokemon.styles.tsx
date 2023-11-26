import styled from "styled-components";
import { NavLink as ReactRouterDOMNavLink } from "react-router-dom";

// Constants
import { pokemonTypeColorCodes as typeColor } from "../../../../constants/pokemonTypeColorCodes";

// Breakpoints
import { smartTv } from "../../../../constants/breakpoints";

// Typings
import { Types } from "../../../../types/pokemon.types";

const NavLink = styled(ReactRouterDOMNavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 30px;

  height: 100px;
  @media screen and (min-width: ${smartTv}px) {
    height: 200px;
  }

  text-shadow: 0 0 10px #ffffff50;
  color: black;

  &&.active {
    font-weight: bold;
  }
`;

type LiProps = {
  $pkmTypes: Types;
};
const Li = styled.li<LiProps>`
  margin: 5px 0;
  &&:hover {
    filter: brightness(120%);
  }
  @media (min-width: ${smartTv}px) {
    margin: 10px 0;
  }

  background: linear-gradient(
    to right,
    ${({ $pkmTypes }) => typeColor[$pkmTypes.primary]} 50%,
    ${({ $pkmTypes }) =>
        $pkmTypes.secondary
          ? typeColor[$pkmTypes.secondary]
          : typeColor[$pkmTypes.primary]}
      50%
  );

  transition: filter 0.1s;
`;

const ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${smartTv}px) {
    width: 162px;
    height: 162px;
  }

  img {
    min-width: 70%;
    width: auto;
    max-height: 100%;
  }
`;

const PokemonName = styled.span`
  font-size: clamp(0.8rem, 0.8rem + 0.6vw, 2.5rem);
  text-align: center;
`;

const PokemonId = styled.span`
  font-size: clamp(0.8rem, 0.8rem + 0.6vw, 2.5rem);
`;

export { NavLink, Li, ImgWrapper, PokemonName, PokemonId };
