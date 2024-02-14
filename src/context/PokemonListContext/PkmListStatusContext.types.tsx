import { SetStateAction } from "react";

type TPkmListStatus = {
    isOpen: boolean;
    filtered: {
        is: boolean;
        type1: string | null;
        type2: string | null;
    };
    sorted: {
        is: boolean;
        by: "name" | "id" | null;
        order: "asc" | "desc" | null;
    };
    visiblePokemons: number;
    totalPokemons: number;
}

type TPkmListStatusContext = {
    pkmListStatus: TPkmListStatus;
    setPkmListStatus: React.Dispatch<SetStateAction<TPkmListStatus>>;
}

export type { TPkmListStatus, TPkmListStatusContext };
