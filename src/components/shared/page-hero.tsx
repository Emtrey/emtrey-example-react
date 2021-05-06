import Container from './container';
import styled from '@emotion/styled';
import { colors, dimensions, breakpoints } from '../../styles/variables';

const StyledPageHero = styled(Container)`
  background: radial-gradient(
    circle at bottom right,
    ${colors.brand1} 10%,
    ${colors.brand} 100%
  );
  padding-top: 8.8rem;
  padding-bottom: ${dimensions.spacerLarge};
  cursor: default;
  color: #fffa;
  > h1 {
    color: #fff;
  }
  @media (max-width: ${breakpoints.md}) {
    padding-top: 5.4rem;
  }
`;

const PageHero: React.FunctionComponent = ({ children }) => (
  <StyledPageHero className="center">{children}</StyledPageHero>
);

export default PageHero;
