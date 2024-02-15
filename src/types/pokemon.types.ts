type Ability = {
  name: string;
  description?: string;
  isHidden: boolean;
  url: string;
};

type Move = {
  name: string;
  description?: string;
  url: string;
};

type Sprites = {
  static: string;
  animated: string | null;
  artwork: string | null;
};

type Stats = {
  hp: number;
  attack: number;
  spAttack: number;
  defense: number;
  spDefense: number;
  speed: number;
};

type Types = {
  primary: TypesAccepted;
  secondary: TypesAccepted | null;
};

type TypesAccepted =
"bug" | "dark" | "dragon" | "electric" | "fairy" | "fighting" |
"fire" | "flying" | "ghost" | "grass" | "ground" | "ice" |
"normal" | "poison" | "psychic" | "rock" | "steel" | "water"

type SpeciesInfo = {
  description: string;
  genera: string;
  generation: string;
  habitat: string;
};

interface IPokemon {
  abilities: Ability[];
  height: number;
  id: number;
  name: string;
  moves: Move[];
  sprites: Sprites;
  speciesInfo?: SpeciesInfo;
  stats: Stats;
  types: Types;
  weight: number;
}

export type { Ability, Move, Sprites, Stats, Types, TypesAccepted, SpeciesInfo, IPokemon };
