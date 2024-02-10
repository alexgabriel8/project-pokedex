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
      <S.SearchIcon
        theme={activeTheme}
        onClick={() =>
          props.addPkmByInputToList(
            document.querySelector<HTMLInputElement>("#input-add-pkm-by-input")!
              .value,
          )
        }
      />
      <S.AddPkmByInput
        theme={activeTheme}
        id="input-add-pkm-by-input"
        onKeyDown={handleKeyDown}
        placeholder="Name or ID..."
      />
    </S.AddPkmByInputWrapper>
  );
};

export { AddPkmByInput };
