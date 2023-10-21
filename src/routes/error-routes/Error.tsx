import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <ErrorDiv>
      <Link to="/">Return to index page</Link>
      Error: {String(error)}
    </ErrorDiv>
  );
};

const ErrorDiv = styled.div``;

export default Error;
