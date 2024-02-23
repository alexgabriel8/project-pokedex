import { useContext } from "react";

// Constants
import { pokemonTypes } from "@constants/pokemonTypes";

// Components
import * as S from "./PokemonFilter.styles";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

// Types
import { TypesAccepted } from "@typings/pokemon.types";

type Props = {
  index: number;
  setType: (type: TypesAccepted | null) => void;
  type: TypesAccepted | null;
  otherFilterType: TypesAccepted | null;
};

const PokemonFilter = (props: Props) => {
  const { activeTheme } = useContext(ThemeContext)!;

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isUnselectedLI =
      target.tagName === "LI" && !target.classList.contains("selected");
    const filter = document.querySelector(`#filter-${props.index}`)!;

    if (isUnselectedLI) {
      if (target.innerHTML === "any") props.setType(null);
      else props.setType(target.innerHTML as TypesAccepted);

      filter.classList.remove("open");
    } else if (!target.classList.contains("selected")) {
      filter.classList.toggle("open");
    }
  };

  return (
    <S.PokemonFilterContainer
      theme={activeTheme}
      onClick={(e) => handleClick(e)}
      id={`filter-${props.index}`}
    >
      <p className="selected-option">
        {props.type || (props.index === 1 ? "1st type" : "2nd type")}
      </p>
      <S.PokemonFilterCaret theme={activeTheme} className="caret" />
      <S.PokemonFilterOptions className="options">
        <S.PokemonFilterOption theme={activeTheme}>any</S.PokemonFilterOption>
        {pokemonTypes.map((type: TypesAccepted, i: number) => (
          <S.PokemonFilterOption
            theme={activeTheme}
            key={i}
            className={
              [props.type, props.otherFilterType].includes(type)
                ? "selected"
                : ""
            }
          >
            {type}
          </S.PokemonFilterOption>
        ))}
      </S.PokemonFilterOptions>
    </S.PokemonFilterContainer>
  );
};

export { PokemonFilter };
