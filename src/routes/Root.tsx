import { Outlet } from "react-router-dom";

import { PokemonList } from "../components/PokemonList/PokemonList";
import { PkmListToggler } from "../components/PokemonList/PkmListToggler/PkmListToggler";

const Root = () => {
  return (
    <>
      <PokemonList />
      <PkmListToggler />
      <Outlet />
    </>
  );
};

export default Root;
