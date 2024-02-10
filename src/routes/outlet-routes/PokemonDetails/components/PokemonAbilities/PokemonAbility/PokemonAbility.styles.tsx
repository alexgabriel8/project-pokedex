import styled from "styled-components";
// Breakpoints
import { smartTv } from "@constants/breakpoints";

// Styles
import { noScrollBars } from "@styles/noScrollBars";

// Types
import { TTheme } from "@typings/themes.types";

type Props = {
  theme: TTheme;
}

const PokemonAbility = styled.li<Props>`
  --top-shadow: inset 0 30px 20px -10px #000000A0;
  --bottom-shadow: inset 0 -30px 20px -10px #000000A0;
  @media (min-width: ${smartTv}px) {
    --top-shadow: inset 0 60px 40px -20px #000000A0;
    --bottom-shadow: inset 0 -60px 40px -20px #000000A0;
  }

  display: flex;
  flex-direction: column;

  flex-basis: 350px;
  height: 215px;
  padding: 10px;
  @media (min-width: ${smartTv}px) {
    flex-basis: 700px;
    height: 430px;
    padding: 20px;
  }

  background-color: ${({ theme }) => theme.secondary};

  border: 2px solid ${({ theme }) => theme.terciary};

  .transparent-text-with-shadow {
    font-size: 1.2rem;
    @media (min-width: ${smartTv}px) {
      font-size: 2rem;
    }

    color: white;
    opacity: 0.6;
    text-shadow: 0 0 10px #000000;
  }

  .ability-name {
    font-weight: bold;
    text-transform: capitalize;
    text-shadow:
      1px 1px 0 #000,
      -1px 1px 0 #000,
      -1px -1px 0 #000,
      1px -1px 0 #000;

    font-size: 1.5rem;
    @media (min-width: ${smartTv}px) {
      font-size: 2.5rem;
    }

    margin: 5px 0;

    color: white;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .ability-description {
    ${noScrollBars};

    text-align: justify;
    word-break: break-word;

    font-size: 1.3rem;
    @media (min-width: ${smartTv}px) {
      font-size: 2.3rem;
    }

    color: white;

    overflow: scroll;
  }

  .ability-description.shadow-at-top {
    box-shadow: var(--top-shadow);
  }
  .ability-description.shadow-at-bottom {
    box-shadow: var(--bottom-shadow);
  }
  .ability-description.shadow-at-top.shadow-at-bottom {
    box-shadow: var(--top-shadow), var(--bottom-shadow);
  }
`;

export { PokemonAbility };
