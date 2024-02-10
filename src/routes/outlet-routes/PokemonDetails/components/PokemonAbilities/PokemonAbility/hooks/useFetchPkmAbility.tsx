import { useEffect, useState } from "react";

// Scripts
import { getPkmAbilityDescription } from "@services/getPkmAbilityDescription/getPkmAbilityDescription";

// Types
import { Ability } from "@typings/pokemon.types";

const useFetchPkmAbilityDescription = (ability: Ability) => {
  const [abilityDesc, setAbilityDesc] = useState("");
  const [fetchError, setFetchError] = useState<string | false>(false);

  useEffect(() => {
    const abilityHasDescription = ability.description;

    if (abilityHasDescription) {
      setAbilityDesc(ability.description!);
    } else {
      getPkmAbilityDescription(ability.url)
        .then((fetchedAbilityDesc) => {
          ability.description = fetchedAbilityDesc;
          setAbilityDesc(fetchedAbilityDesc as string);
        })
        .catch((err: Error) => {
          setFetchError("Error: " + err.message);
        });
    }
  }, []);

  return [abilityDesc, fetchError];
};

export { useFetchPkmAbilityDescription };
