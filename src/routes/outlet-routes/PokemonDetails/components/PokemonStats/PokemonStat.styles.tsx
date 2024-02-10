import styled from "styled-components";

// Types
import { TTheme } from "@typings/themes.types";

const StatName = styled.span`
  font-weight: bold;
`;

type HorizontalLineProps = {
  $theme: TTheme;
};

const HorizontalLine = styled.hr<HorizontalLineProps>`
  margin: 5px 0;
  border: 1px solid ${({ $theme }) => $theme.terciary};
  min-width: calc(90px + 0.9vw);
`;

export { StatName, HorizontalLine };
