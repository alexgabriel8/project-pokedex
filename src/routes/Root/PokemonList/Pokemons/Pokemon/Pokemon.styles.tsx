import styled from "styled-components";
import { NavLink as ReactRouterDOMNavLink } from "react-router-dom";

// Constants
import { pokemonTypeColorCodes as typeColor } from "@constants/pokemonTypeColorCodes";

// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Types
import { Types } from "@typings/pokemon.types";

type NavLinkProps = {
  $pkmTypes: Types;
};
const NavLink = styled(ReactRouterDOMNavLink)<NavLinkProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 15px;
  @media screen and (min-width: ${smartTv}px) {
    padding: 20px 30px;
  }

  text-shadow: 0 0 10px #ffffff30;
  color: black;

  &&.active {
    font-weight: bold;
    outline: 5px solid #000;
  }

  &&:hover {
    filter: brightness(120%);
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
`;

const Li = styled.li`
  position: relative;

  margin: 5px 0;
  @media (min-width: ${smartTv}px) {
    margin: 10px 0;
  }

  transition: filter 0.1s;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 96px;
  height: 96px;
  @media screen and (min-width: ${smartTv}px) {
    width: 162px;
    height: 162px;
  }

  img {
    max-height: 100%;
    object-fit: contain;
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
