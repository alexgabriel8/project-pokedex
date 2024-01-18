import styled from "styled-components";

// Style
import { OutletRoute } from "../../../styles/OutletRoute";

// Types
import { TTheme } from "../../../constants/themes/themes.types";

type Props = {
  theme: TTheme;
}

const Welcome = styled(OutletRoute)<Props>`
  gap: 20px;
  justify-content: space-evenly;
  @media (max-height: 600px) {
    justify-content: space-between; // Stops content being clipped at lower heights
  }

  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => (theme.name === "light" ? "black" : "white")};

  .welcome-text {
    max-width: 1000px;
  }

  // Prevents not transitioning immediately when theme is toggled
  footer p,
  footer strong {
    transition: color 0s;
  }
`;

export { Welcome };
