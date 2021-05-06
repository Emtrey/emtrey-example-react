import styled from '@emotion/styled';
import mark from '../../../src/img/logo-mark-white.svg';
import coloredMark from '../../../src/img/logo-mark-color.svg';
import text from '../../../src/img/logo-text-white.svg';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  .LogoMark {
    width: 20px;
  }
  .LogoText {
    width: 110px;
    position: relative;
    left: 10px;
    top: -2px;
  }
`;

const Logo: React.FunctionComponent<{
  showText?: boolean;
  color?: boolean;
  className?: string;
}> = ({ className, color = true, showText = true }) => (
  <StyledLink className={className} href="https://storekick.io">
    <img src={color ? coloredMark : mark} className="LogoMark" />
    {showText && <img src={text} className="LogoText" />}
  </StyledLink>
);

export default Logo;
