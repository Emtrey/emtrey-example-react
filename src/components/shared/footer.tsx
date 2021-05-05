import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors, dimensions, breakpoints } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';
import Logo from './logo';

const StyledFooter = styled.footer`
  ${flexCenter};
  background-color: ${colors.gray.dark};
  height: 240px;
  color: #fff;
  font-size: ${dimensions.fontSize.medium}px;
  padding: 2rem;
  @media (max-width: ${breakpoints.lg}) {
    height: auto;
    flex-direction: column;
    padding-top: ${dimensions.spacer};
    padding-bottom: ${dimensions.spacer};
  }
  .Logo {
    @media (max-width: ${breakpoints.lg}) {
      display: none;
    }
    .LogoMark,
    .LogoText {
      opacity: 0.32;
      transition: opacity 0.4s ease-out;
    }
    .LogoMark {
      transition-delay: 0.12s;
    }
    .LogoText {
      transition-delay: 0.22s;
    }
    &:hover {
      .LogoMark,
      .LogoText {
        opacity: 0.8;
      }
    }
  }
  .Footer-legal {
    font-size: ${dimensions.fontSize.xsmall}px;
    color: rgba(255, 255, 255, 0.2);
    margin-top: 1rem;
    margin-left: 2rem;
    cursor: default;
    @media (max-width: ${breakpoints.lg}) {
      display: none;
    }
    a {
      color: inherit;
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  &.nav {
    width: 20%;
    margin-left: auto;
    flex-direction: row;
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
      flex-direction: column;
    }
  }
`;

const FooterHeader = styled.h6`
  font-size: ${dimensions.fontSize.xsmall}px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.2rem;
  color: rgba(255, 255, 255, 0.4);
`;

const FooterNavBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    display: block;
    flex: none;
    text-align: center;
  }
  .Link-wrapper {
    margin-bottom: 0.6rem;
    @media (max-width: ${breakpoints.lg}) {
      display: block;
    }
    a {
      color: rgba(255, 255, 255, 0.66);
      cursor: pointer;
      text-decoration: none;
      white-space: nowrap;
      position: relative;
      transition: color 0.2s linear;
      &:hover {
        color: #fff;
        span {
          width: 100%;
        }
      }
      &:active {
        span {
          width: calc(100% + 6px);
        }
      }
      span {
        background-color: ${colors.brand};
        width: 0;
        height: 2px;
        position: absolute;
        bottom: -4px;
        left: 0;
        display: inline-block;
        transition: width 0.2s ease-in;
      }
    }
  }
`;

const FooterLink: React.FunctionComponent<{ to: string }> = ({
  to,
  children,
}) => (
  <span className="Link-wrapper">
    {to.indexOf('://') > -1 ? (
      <a href={to}>
        {children}
        <span />
      </a>
    ) : (
      <Link to={to}>
        {children}
        <span />
      </Link>
    )}
  </span>
);

const Footer: React.FunctionComponent<{ year: string }> = ({ year }) => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Logo className="Logo" color={false} />
        <p className="Footer-legal">
          &copy; {year} <a href="https://storekick.io">StoreKick.io</a>
        </p>
      </FooterContainer>
      <FooterContainer className="nav">
        <FooterNavBlock>
          <FooterHeader>StoreKick</FooterHeader>
          <FooterLink to="/pricing">Pricing</FooterLink>
          <FooterLink to="/features">Features</FooterLink>
          <FooterLink to="http://portal.storekick.io">Login</FooterLink>
        </FooterNavBlock>
        {/* @brad Moving this to post mvp <FooterNavBlock>
          <FooterHeader>For Your Store</FooterHeader>
          <FooterLink to="/shopify">Shopify</FooterLink>
          <FooterLink to="/woo-commerce">WooCommerce</FooterLink>
          <FooterLink to="/custom-store">Custom</FooterLink>
        </FooterNavBlock> */}
        <FooterNavBlock>
          <FooterHeader>Support</FooterHeader>
          <FooterLink to="/support">Contact Us</FooterLink>
          <FooterLink to="/terms">Terms of Use</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
        </FooterNavBlock>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
