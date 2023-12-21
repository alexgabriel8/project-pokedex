import styled from "styled-components";

import { smartTv } from "../../../../../constants/breakpoints";

const BottomBarToggler = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 25px 25px 0 0;
  @media (min-width: ${smartTv}px) {
    width: 100px;
    height: 50px;
    border-radius: 50px 50px 0 0;
  }

  background-color: ${(props) => props.theme.primary};

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  padding-block: 5px; // for toggler to glue on the container in Google Chrome

  z-index: 1;
`;

export { BottomBarToggler };
