import { useEffect, useState } from "react";
import { Ability } from "../../../../../../../types/pokemon.types";
import { getPkmAbilityDescription } from "../../../../../../../services/getPkmAbilityDescription/getPkmAbilityDescription";

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
          setAbilityDesc(fetchedAbilityDesc);
        })
        .catch((err) => {
          setFetchError("Error: " + err.message);
        });
    }
  }, []);

  return [abilityDesc, fetchError];
};

export { useFetchPkmAbilityDescription };
