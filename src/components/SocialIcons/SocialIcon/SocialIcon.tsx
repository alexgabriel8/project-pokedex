import { useContext } from "react";

// Styled components
import * as S from "./SocialIcon.styles";

// Types
import { TSocialIcon } from "../icons-info.types";

// Context
import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";

type SocialIconProps = {
  icon: TSocialIcon;
};
const SocialIcon = ({ icon }: SocialIconProps) => {
  const { activeTheme } = useContext(ThemeContext)!;

  return (
    <S.Link href={icon.link} target="_blank" theme={activeTheme}>
      <S.SocialIconSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.viewBox}
        theme={activeTheme}
      >
        <title>{icon.name}</title>
        <desc>{icon.name + " logo"}</desc>
        {icon.paths.map((path: string, index: number) => (
          <path key={index} d={path} {...(icon.pathRules as any)} />
        ))}
      </S.SocialIconSvg>
    </S.Link>
  );
};

export { SocialIcon };
