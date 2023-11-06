import { Link as ReactRouterDOMLink } from "react-router-dom";
import styled from "styled-components";

import { smartTv } from "../../../../constants/breakpoints";

const Link = styled(ReactRouterDOMLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${smartTv}px) {
    height: 160px;
  }

  padding-right: 30px;
`;

const Li = styled.li`
  margin: 5px 0;
  @media (min-width: ${smartTv}px) {
    margin: 10px 0;
  }

  background-color: gray;
`;

const ImgWrapper = styled.div`
  width: 96px;
  @media screen and (min-width: ${smartTv}px) {
    width: 162px;
    height: 162px;
  }
`;

const PokemonName = styled.span`
  font-size: clamp(0.8rem, 0.8rem + 0.6vw, 2.5rem);
`;

const PokemonId = styled.span`
  font-size: clamp(0.8rem, 0.8rem + 0.6vw, 2.5rem);
`;

export { Link, Li, ImgWrapper, PokemonName, PokemonId };
