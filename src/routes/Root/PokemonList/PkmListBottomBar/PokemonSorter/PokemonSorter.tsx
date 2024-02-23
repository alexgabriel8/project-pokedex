import { useContext, useState } from "react";

// Constants
import { sortOptions } from "./sortOptions";

// Components
import {
  Select,
  SelectCaret,
  SelectOption,
  SelectOptions,
} from "@components/Select";

// Contexts
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const PokemonSorter = () => {
  const { activeTheme } = useContext(ThemeContext)!;
  const { setPkmListStatus } = useContext(PkmListStatusContext);
  const [optionSelected, setOptionSelected] = useState("No Sort");

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isUnselectedLI =
      target.tagName === "LI" && !target.classList.contains("selected");
    const sorter = document.querySelector("#pokemon-sorter")!;

    if (isUnselectedLI) {
      const targetBy = target.dataset.by as "id" | "name";
      const targetOrder = target.dataset.order as "asc" | "desc";

      setOptionSelected(target.innerHTML);

      if (target.innerHTML === "No Sort") {
        setPkmListStatus((prevStatus) => ({
          ...prevStatus,
          sort: {
            by: null,
            order: null,
          },
        }));
      } else {
        setPkmListStatus((prevStatus) => ({
          ...prevStatus,
          sort: {
            by: targetBy,
            order: targetOrder,
          },
        }));
      }

      sorter.classList.remove("open");
    } else if (!target.classList.contains("selected")) {
      sorter.classList.toggle("open");
    }
  };

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
