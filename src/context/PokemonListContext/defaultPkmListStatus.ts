import { TPkmListStatus } from "./PkmListStatusContext.types";

const defaultPkmListStatus: TPkmListStatus = {
    isOpen: false,
    filtered: {
        is: false,
        type1: null,
        type2: null
    },
    sorted: {
        is: false,
        by: null,
        order: null
    },
    visiblePokemons: 0,
    totalPokemons: 0
};

export { defaultPkmListStatus };
