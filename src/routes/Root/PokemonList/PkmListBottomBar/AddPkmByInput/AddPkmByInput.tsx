import { useContext } from "react";

// Components
import * as S from "./AddPkmByInput.styles";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

type Props = {
  addPkmByInputToList: (input: string) => Promise<void>;
};
const AddPkmByInput = (props: Props) => {
  const { activeTheme } = useContext(ThemeContext)!;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") props.addPkmByInputToList(e.currentTarget.value);
  };

  return (
    <S.AddPkmByInputWrapper id="add-pkm-by-input">
      <S.AddPkmByInput
        theme={activeTheme}
        onKeyDown={handleKeyDown}
        placeholder="Name or ID..."
      />
      <S.SearchIcon
        theme={activeTheme}
        onClick={() =>
          props.addPkmByInputToList(
            document.querySelector<HTMLInputElement>("#add-pkm-by-input input")!
              .value,
          )
        }
      />
    </S.AddPkmByInputWrapper>
  );
};

export { AddPkmByInput };
