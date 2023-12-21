import styled from "styled-components";

// Components
import { SearchSvg } from "../../../../../components/SvgIcons/SearchSvg";

// Breakpoints
import { smartTv } from "../../../../../constants/breakpoints";

const AddPkmByInputWrapper = styled.div`
  display: inline-block;
  position: relative;
  flex-basis: 250px;
  @media (min-width: ${smartTv}px) {
    flex-basis: 500px;
  }
`;

const AddPkmByInput = styled.input`
  width: 100%;

  height: 40px;
  padding: 0 35px 0 5px;
  @media (min-width: ${smartTv}px) {
    height: 80px;
    padding: 0 70px 0 10px;
    font-size: 25px;
  }

  color: ${({ theme }) => theme.terciary};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 5px;

  &&::placeholder {
    opacity: 1;
  }
`;

const SearchIcon = styled(SearchSvg)`
  width: 25px;
  height: 25px;
  @media (min-width: ${smartTv}px) {
    width: 50px;
    height: 50px;
  }

  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0, -50%);
  fill: ${({ theme }) => theme.terciary};

  cursor: pointer;
`;

export { AddPkmByInputWrapper, AddPkmByInput, SearchIcon };
