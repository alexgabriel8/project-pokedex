import styled from "styled-components";

import { OutletRoute } from "../../../styles/OutletRoute";

const PokemonDetails = styled(OutletRoute)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => (props.theme.name === "light" ? "black" : "white")};
`;

export { PokemonDetails };
