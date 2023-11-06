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
  flex-direction: column;
  gap: 20px;
`;

export { OutletRoute };
