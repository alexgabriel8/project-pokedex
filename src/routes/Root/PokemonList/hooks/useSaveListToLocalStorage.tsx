import { useContext, useEffect } from "react";

// Scripts
import { saveOnLocalStorage } from "@scripts/localStorage";

// Constants
import { savedPokemonsLocalStorageKey } from "@constants/localStorageAccessKeys";

// Context
import { PokemonsContext } from "@context/PokemonsContext/PokemonsContext";
import { SettingsContext } from "@context/SettingsContext/SettingsContext";

const useSaveListToLocalStorage = () => {
  const { pokemons } = useContext(PokemonsContext)!;
  const { settings } = useContext(SettingsContext)!;

  const allowSave = settings.savePkmListInLocalStorage;

  useEffect(() => {
    if (pokemons.length === 0) return;

    if (allowSave) saveOnLocalStorage(savedPokemonsLocalStorageKey, pokemons);
  }, [pokemons, allowSave]);
};

export { useSaveListToLocalStorage };
