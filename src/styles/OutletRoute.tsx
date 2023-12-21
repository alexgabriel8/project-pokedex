import styled from "styled-components";
import { noScrollBars } from "./noScrollBars";

const OutletRoute = styled.div`
  ${noScrollBars};

  position: relative;
  overflow-y: scroll;
  width: 100%;
  padding: 10px;
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { OutletRoute };
