import styled from "styled-components";

// Components
import { PlusSvg } from "../../../../../components/SvgIcons/PlusSvg";

// Breakpoints
import { smartTv } from "../../../../../constants/breakpoints";

const AddPkmByInputWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const AddPkmByInput = styled.input`
  width: 60px;
  height: 40px;
  padding: 0 30px 0 5px;
  @media (min-width: ${smartTv}px) {
    width: 120px;
    height: 80px;
    padding: 0 60px 0 10px;

    font-size: 25px;
  }

  border-radius: 5px;
  color: ${({ theme }) => theme.terciary};
  background-color: ${({ theme }) => theme.primary};

  appearance: textfield;
  -moz-appearance: textfield;
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;

const PlusIcon = styled(PlusSvg)`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0, -50%);

  fill: ${({ theme }) => theme.terciary};

  width: 25px;
  height: 25px;
  @media (min-width: ${smartTv}px) {
    width: 50px;
    height: 50px;
  }

  :hover {
    cursor: pointer;
  }
`;

export { AddPkmByInputWrapper, AddPkmByInput, PlusIcon };
