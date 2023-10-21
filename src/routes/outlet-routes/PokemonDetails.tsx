import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const params = useParams();
  return <p>Pokemon {params.id} details</p>;
};

export default PokemonDetails;
