import { useContext, useState } from "react";

// Components
import * as S from "./AddPkmByAmount.styles";

// Context
import { ThemeContext } from "../../../../../context/ThemeContext/ThemeContext";

type Props = {
  addPkmsByAmountToList: (input: number) => Promise<void>;
};
const AddPkmByAmount = (props: Props) => {
  const [amount, setAmount] = useState(1);
  const { activeTheme } = useContext(ThemeContext)!;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") props.addPkmsByAmountToList(amount);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value);
    if (Number.isNaN(parsedValue)) return;

    const secondDigit = parseInt(e.target.value[1]) ?? null;
    const thirdDigit = parseInt(e.target.value[2]) ?? null;

    if (secondDigit && secondDigit !== 0)
      return setAmount(parseInt(e.target.value[1]));
    if (thirdDigit && thirdDigit !== 0)
      return setAmount(parseInt(e.target.value[2]));

    if (parsedValue < 1) return setAmount(1);
    if (parsedValue > 10) return setAmount(10);

    setAmount(parsedValue);
  };

  return (
    <S.AddPkmByInputWrapper>
      <S.PlusIcon
        onClick={() => props.addPkmsByAmountToList(amount)}
        id="icon-add-pkm-by-amount"
        theme={activeTheme}
      />
      <S.AddPkmByInput
        theme={activeTheme}
        type="number"
        autoComplete="off"
        id="input-add-pkm-by-amount"
        value={amount}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        min={1}
        max={10}
        step={1}
      />
    </S.AddPkmByInputWrapper>
  );
};

export { AddPkmByAmount };
