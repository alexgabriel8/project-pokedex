import { Outlet } from "react-router-dom";
import { PokemonList } from "./PokemonList/PokemonList";
import { PkmListToggler } from "./PokemonList/PkmListToggler/PkmListToggler";

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
