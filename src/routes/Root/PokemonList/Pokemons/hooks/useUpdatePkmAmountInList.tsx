import { useContext, useEffect } from "react";

// Context
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

const useUpdatePkmAmountInlist = (visible: number, total: number) => {
  const { setPkmListStatus } = useContext(PkmListStatusContext)!;

  useEffect(() => {
      setPkmListStatus((prevStatus) => ({
        ...prevStatus,
        visiblePokemons: visible,
        totalPokemons: total
      }));
    }, [visible, total]);
};

export { useUpdatePkmAmountInlist };
