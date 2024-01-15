import { useContext } from "react";

// Components
import { SocialIcons } from "./SocialIcons/SocialIcons";

// Styled Components
import * as S from "./Welcome.styles";

// Context
import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";

const Welcome = () => {
  const version = import.meta.env.VITE_APP_VERSION;
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.Welcome theme={activeTheme}>
      <h1>Welcome to Project Pokédex {version}!</h1>

      <p className="welcome-text">
        Click on a Pokémon on the list to the left to see more details about him
        here!
        <br />
        <br />
        To add a new Pokémon: search for his name, id or add between 1 to 10
        random Pokémons.
        <br />
        <br />
        Pokémons can be filtered by type; hidden if he does not meet the filter
        criteria and the list can be sorted by id or alphabetical order.
      </p>

      <footer>
        <p>
          Created by <strong>Alex Gabriel</strong>
        </p>

        <SocialIcons />
      </footer>
    </S.Welcome>
  );
};

export default Welcome;
