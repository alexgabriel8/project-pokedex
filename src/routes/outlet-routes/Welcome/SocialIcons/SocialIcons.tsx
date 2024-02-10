import { useContext } from "react";

// Components
import * as S from "./SocialIcons.styles";
import { GitHubSVG } from "@components/SvgIcons/social/GitHubSVG";
// import { LinkedInSVG } from "@components/SvgIcons/social/LinkedInSVG";

// Context
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const SocialIcons = () => {
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.SocialIconsContainer theme={activeTheme}>
      <a
        href="https://github.com/alexgabriel8"
        target="_blank"
        className="social-icon"
        rel="noreferrer"
      >
        <GitHubSVG />
      </a>
      {/* <a
        href="https://linkedin.com"
        target="_blank"
        className="social-icon"
        rel="noreferrer"
      >
        <LinkedInSVG />
      </a> */}
    </S.SocialIconsContainer>
  );
}

export { SocialIcons };
