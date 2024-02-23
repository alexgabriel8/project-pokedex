import { useEffect, useState } from "react";

const useIsPokemonListOpen = () => {
  const pokemonList = document.querySelector(".pokemon-list")!;
  const pkmListToggler = document.querySelector("#pokemon-list-toggler")!;

  const [isListOpen, setIsListOpen] = useState(false);

  const handleListTogglerClick = () => {
    setIsListOpen(pokemonList.classList.contains("hidden"));
  };

  useEffect(() => {
    pkmListToggler.addEventListener("click", handleListTogglerClick);

    return () => {
      pkmListToggler.removeEventListener("click", handleListTogglerClick);
    };
  }, []);

  return isListOpen;
};

export { useIsPokemonListOpen };
