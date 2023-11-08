// Components
import { SocialIcon } from "./SocialIcon/SocialIcon";

// Styled components
import * as S from "./SocialIcons.styles";

// JSON
import icons from "./icons-info.json";

// Types
import { TSocialIcon } from "./icons-info.types";

const SocialIcons = () => (
  <S.SocialIconsWrapper>
    {icons.map((icon: TSocialIcon) => (
      <SocialIcon icon={icon} key={icon.name} />
    ))}
  </S.SocialIconsWrapper>
);

export { SocialIcons };
