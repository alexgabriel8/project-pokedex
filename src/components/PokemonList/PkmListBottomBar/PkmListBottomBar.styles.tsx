import styled from "styled-components";

const BottomBarWrapper = styled.div`
  overflow: hidden;
  position: sticky;
  bottom: 0;
`;

const PkmListBottomBar = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.primary + "90"};
  padding: 10px;
  &&:not(.hidden) {
    backdrop-filter: blur(1px);
  }

  &&.hidden {
    background-color: transparent;
    margin-top: -300px;
  }

  transition:
    margin-top 0.5s,
    background-color 0.5s;
`;

export { PkmListBottomBar, BottomBarWrapper };
