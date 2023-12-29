// Components
import * as S from "./PokemonStats.styles";
import { PokemonStat } from "./PokemonStat";

// Types
import * as pkmTypes from "../../../../../types/pokemon.types";

const PokemonStats = ({ stats }: { stats: pkmTypes.Stats }) => (
  <S.Stats>
    <PokemonStat stat="HP" value={stats.hp} />
    <PokemonStat stat="Attack" value={stats.attack} />
    <PokemonStat stat="Defense" value={stats.defense} />
    <PokemonStat stat="Sp. Atk" value={stats.spAttack} />
    <PokemonStat stat="Sp. Def" value={stats.spDefense} />
    <PokemonStat stat="Speed" value={stats.speed} />
  </S.Stats>
);

export { PokemonStats };
