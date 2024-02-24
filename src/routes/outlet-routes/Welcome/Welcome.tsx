import { useContext } from "react";

// Components
import { SocialIcons } from "./SocialIcons/SocialIcons";

// Components
import * as S from "./Welcome.styles";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const Welcome = () => {
  const version = import.meta.env.VITE_APP_VERSION as string;
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.Welcome theme={activeTheme}>
      <h1>Welcome to Project Pokédex {version}!</h1>

      <p className="welcome-text">
        Click on the button to the left to open the Pokémon list then click on a
        Pokémon to see more details about him here!
        <br />
        <br />
        Add new Pokémons by searching its name, id or between 1 to 10 random
        Pokémons.
        <br />
        <br />
        Pokémons can be filtered by type and sorted by id or alphabetical order.
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
