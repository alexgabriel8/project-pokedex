import { useEffect, useState } from "react";

// Scripts
import { getPokemon } from "@services/getPokemon/getPokemon";

// Types
import { IPokemon } from "@typings/pokemon.types";

const useFetchAdjacentPokemon = (pkmId: number) => {
  const [pokemon, setPokemon] = useState<string | IPokemon>("");
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    setPokemon("fetching");

    getPokemon(pkmId)
      .then((fetchedPkm) => {
        setPokemon(fetchedPkm);
      })
      .catch((err) => {
        setFetchError(err.message);
        setPokemon("error");
      });
  }, [pkmId]);

  return [pokemon, fetchError];
};

export { useFetchAdjacentPokemon };
