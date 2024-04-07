import { useContext } from "react";

// Constants
import { sortOptions } from "./sortOptions";

// Components
import {
  Select,
  SelectCaret,
  SelectOption,
  SelectOptions,
} from "@components/Select";

// Hooks
import { useHandlePokemonSorterClick } from "./useHandlePokemonSorterClick";

// Contexts
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const PokemonSorter = () => {
  const { activeTheme } = useContext(ThemeContext)!;
  const [ optionSelected, handleClick ] = useHandlePokemonSorterClick();

  return (
    <Select
      id="pokemon-sorter"
      theme={activeTheme}
      onClick={(e) => handleClick(e)}
      style={{ margin: "0 auto" }}
    >
      <p className="selected-option">{optionSelected}</p>
      <SelectCaret theme={activeTheme} className="caret" />
      <SelectOptions className="options">
        <SelectOption theme={activeTheme}>No Sort</SelectOption>
        {sortOptions.map((option, i) => (
          <SelectOption
            theme={activeTheme}
            key={i}
            data-by={option.by}
            data-order={option.order}
          >
            {option.option}
          </SelectOption>
        ))}
      </SelectOptions>
    </Select>
  );
};

export { PokemonSorter };
