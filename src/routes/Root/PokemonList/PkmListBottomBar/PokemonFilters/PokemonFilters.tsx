import { useContext } from "react";

// Components
import * as S from "./PokemonFilters.styles";
import { PokemonFilter } from "./PokemonFilter/PokemonFilter";
import { PokemonFilterIcon } from "./PokemonFilterIcon/PokemonFilterIcon";

// Context
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

// Types
import { TypesAccepted } from "@typings/pokemon.types";

const PokemonFilters = () => {
    const { pkmListStatus, setPkmListStatus } = useContext(PkmListStatusContext);

    const { type1, type2 } = pkmListStatus.filter;

    const setType = (type: TypesAccepted | null, index: number) => {
        setPkmListStatus((prevStatus) => ({
            ...prevStatus,
            filter: {
                ...prevStatus.filter,
                [`type${index}`]: type,
            },
        }));
    };

    return(
        <S.PokemonFiltersContainer>
            <PokemonFilter
                type={type1}
                otherFilterType={type2}
                setType={(type) => setType(type, 1)}
                index={1}
            />
            <PokemonFilter
                type={type2}
                otherFilterType={type1}
                setType={(type) => setType(type, 2)}
                index={2}
            />
            <PokemonFilterIcon />
        </S.PokemonFiltersContainer>
    );
};

export { PokemonFilters };
