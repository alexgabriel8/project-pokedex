import * as S from "./Pokemon.styles";

const Pokemon = (props) => (
  <>
    <S.Li>
      <S.Link to={`pokemon/${props.id}`} className="pokemon">
        <S.ImgWrapper>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt=""
          />
        </S.ImgWrapper>
        <S.PokemonName className="name">Iron Leaves</S.PokemonName>
        <S.PokemonId className="id">#0034</S.PokemonId>
      </S.Link>
    </S.Li>
  </>
);

export { Pokemon };
