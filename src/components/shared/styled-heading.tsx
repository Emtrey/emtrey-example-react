import styled from '@emotion/styled';
import { dimensions, colors, breakpoints } from '../../styles/variables';

export const StyledH2 = styled.h2`
  margin-bottom: ${dimensions.spacers[0]};
  color: inherit;
  &:before {
    content: '';
    background-color: ${colors.brand1};
    width: 80px;
    height: 3px;
    display: block;
    margin-bottom: ${dimensions.spacer};
    @media (max-width: ${breakpoints.lg}) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const StyledHeading: React.FunctionComponent = ({ children }) => (
  <StyledH2>{children}</StyledH2>
);

export default StyledHeading;
