import { Pokemon } from "./Pokemon/Pokemon";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const Pokemons = () => {
  return (
    <ul>
      {arr.map((id) => (
        <Pokemon id={id} key={id} />
      ))}
    </ul>
  );
};

export { Pokemons };
