import { useEffect } from "react";

// Context
import { TPkmListStatus } from "@context/PokemonListContext/PkmListStatusContext.types";

const useUpdatePkmAmountInlist = (visible: number, total: number, setPkmListStatus: React.Dispatch<React.SetStateAction<TPkmListStatus>>) => {
    useEffect(() => {
        setPkmListStatus((prevStatus) => ({
          ...prevStatus,
          visiblePokemons: visible,
          totalPokemons: total
        }));
      }, [visible, total]);
};

export { useUpdatePkmAmountInlist };
