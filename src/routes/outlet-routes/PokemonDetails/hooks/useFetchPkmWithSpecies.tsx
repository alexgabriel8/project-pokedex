import { useContext, useEffect, useState } from "react";

// Scripts
import { isPokemonInList } from "../isPokemonInList";
import { getPokemonSpecies } from "../../../../services/getPokemonSpecies/getPokemonSpecies";
import { getPokemon } from "../../../../services/getPokemon/getPokemon";

// Context
import { PokemonsContext } from "../../../../context/PokemonsContext/PokemonsContext";

// Types
import { IPokemon } from "../../../../types/pokemon.types";

const useFetchPkmWithSpecies = (urlId: string) => {
    const { pokemons } = useContext(PokemonsContext);
    const [pokemon, setPokemon] = useState<string | IPokemon>("");
    const [fetchError, setFetchError] = useState(false);
  
    useEffect(() => {
      setPokemon("loading");
  
      const pokemonInList = isPokemonInList(pokemons, urlId);

      if(pokemonInList) {
        if(!pokemonInList.speciesInfo) {
          getPokemonSpecies(urlId, pokemonInList)
            .then(pkmWithSpecies => setPokemon(pkmWithSpecies))
                .catch(err => {
                    setPokemon("error")
                    setFetchError(err.message)
                })
        } else setPokemon(pokemonInList)
      } else {

        getPokemon(urlId)
          .then((fetchedPkm) => {
            getPokemonSpecies(urlId, fetchedPkm).then((pkmWithSpecies) => {
              setPokemon(pkmWithSpecies);
            });
          })
          .catch((err) => {
            console.log(err);
            setPokemon("error");
            setFetchError(err.message);
          });
        }

    }, [urlId]);
  
    return [
      pokemon,
      fetchError 
    ]
}

export { useFetchPkmWithSpecies }