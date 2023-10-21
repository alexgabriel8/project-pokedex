import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <p>Root route</p>
      <Outlet />
    </>
  );
};

export default Root;
