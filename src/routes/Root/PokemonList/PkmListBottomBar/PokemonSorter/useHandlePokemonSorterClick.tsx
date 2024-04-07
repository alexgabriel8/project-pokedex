import { useContext, useState } from "react";

// Context
import { PkmListStatusContext } from "@context/PokemonListContext/PkmListStatusContext";

type HookReturn = [string, (e: React.MouseEvent) => void]

const useHandlePokemonSorterClick = (): HookReturn => {
    const { setPkmListStatus } = useContext(PkmListStatusContext);
    const [ optionSelected, setOptionSelected ] = useState("No Sort");

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

    return [ optionSelected, handleClick ];
};

export { useHandlePokemonSorterClick };
