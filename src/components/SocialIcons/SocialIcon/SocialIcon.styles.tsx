import styled from "styled-components";

import { smartTv } from "../../../constants/breakpoints";

const Link = styled.a`
  border-radius: 50%;

  &&:hover {
    background-color: ${(props) => props.theme.terciary};
  }

  transition: background-color 0.3s;
`;

const SocialIconSvg = styled.svg`
  display: block; // Remove extra spacing generated to <a> wrapping it

  width: 45px;
  height: 45px;
  padding: 5px;
  @media (min-width: ${smartTv}px) {
    width: 90px;
    height: 90px;
    padding: 10px;
  }

  fill: ${(props) => props.theme.terciary};
  &&:hover {
    fill: ${(props) => props.theme.primary};
  }

  transition: fill 0.3s;
`;

export { Link, SocialIconSvg };
