// Types
import { SetStateAction } from "react";
import { TypesAccepted } from "@typings/pokemon.types";

type TPkmListStatus = {
  isOpen: boolean;
  filter: {
    type1: TypesAccepted | null;
    type2: TypesAccepted | null;
  };
  sort: {
    by: "name" | "id" | null;
    order: "asc" | "desc" | null;
  };
  visiblePokemons: number;
  totalPokemons: number;
};

type TPkmListStatusContext = {
  pkmListStatus: TPkmListStatus;
  setPkmListStatus: React.Dispatch<SetStateAction<TPkmListStatus>>;
};

export type { TPkmListStatus, TPkmListStatusContext };
