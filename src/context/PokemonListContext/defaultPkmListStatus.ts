import { TPkmListStatus } from "./PkmListStatusContext.types";

const defaultPkmListStatus: TPkmListStatus = {
  isOpen: false,
  filter: {
    type1: null,
    type2: null,
  },
  sort: {
    by: null,
    order: null,
  },
  visiblePokemons: 0,
  totalPokemons: 0,
};

export { defaultPkmListStatus };
