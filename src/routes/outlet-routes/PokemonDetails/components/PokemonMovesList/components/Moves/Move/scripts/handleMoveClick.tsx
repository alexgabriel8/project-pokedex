// Scripts
import { getPkmMoveDescription } from "@services/getPkmMoveDescription";

// Types
import { Move as PkmMove } from "@typings/pokemon.types";

function handleMoveClick(e: React.UIEvent<HTMLLIElement>, move: PkmMove) {
  const pokemonMoves = document.querySelectorAll(
    "#pokemon-moves-list #pokemon-moves li",
  );

  pokemonMoves.forEach((move) => {
    move.classList.remove("clicked");
  });

  e.currentTarget.classList.add("clicked");

  e.currentTarget.scrollIntoView({ block: "nearest", behavior: "smooth" });

  const tagWithMoveDescription =
    e.currentTarget.querySelector(".move-description")!;

  if (
    tagWithMoveDescription?.textContent === "" ||
    tagWithMoveDescription.textContent !== move.description
  ) {
    if (move.description) tagWithMoveDescription.textContent = move.description;
    else {
      tagWithMoveDescription.textContent = "Fetching...";

      getPkmMoveDescription(move.url)
        .then((fetchedDescription) => {
          tagWithMoveDescription.textContent = fetchedDescription;
          move.description = fetchedDescription;
        })
        .catch((err) => {
          tagWithMoveDescription.textContent = err.message;
        });
    }
  }
}

export { handleMoveClick };
