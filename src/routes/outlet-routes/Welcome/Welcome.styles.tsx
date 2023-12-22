import styled from "styled-components";

// Style
import { OutletRoute } from "../../../styles/OutletRoute";

const Welcome = styled(OutletRoute)`
  gap: 20px;
  justify-content: space-evenly;
  @media (max-height: 600px) {
    justify-content: space-between; // Stops content being clipped at lower heights
  }

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => (props.theme.name === "light" ? "black" : "white")};

  .welcome-text {
    max-width: 1000px;
  }
`;

export { Welcome };
