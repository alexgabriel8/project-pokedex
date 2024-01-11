import { Outlet } from "react-router-dom";
import { PokemonList } from "./PokemonList/PokemonList";
import { PkmListToggler } from "./PokemonList/PkmListToggler/PkmListToggler";
import { SettingsModal } from "./PokemonList/PkmListBottomBar/SettingsButton/SettingsModal/SettingsModal";

const Root = () => {
  return (
    <>
      <SettingsModal />
      <PokemonList />
      <PkmListToggler />
      <Outlet />
    </>
  );
};

export default Root;
