import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { breakpoints, dimensions } from '../../styles/variables';

const StyledContainer = styled.div`
  width: auto;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: ${dimensions.spacer};
  &.short {
    max-width: 50%;
    width: 50vw;
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
      max-width: none;
    }
  }
  &.medium {
    max-width: 74%;
    width: 68vw;
    @media (max-width: ${breakpoints.xl}) {
      max-width: none;
      width: 78vw;
    }
    @media (max-width: ${breakpoints.md}) {
      max-width: none;
      width: 100%;
    }
  }
  &.center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: ${breakpoints.lg}) {
      text-align: center;
    }
  }
  @media (max-width: ${breakpoints.lg}) {
    padding: 1.4rem;
  }
`;

const Container: React.FunctionComponent<{
  className?: string;
  style?: CSSProperties;
}> = ({ children, className, style }) => (
  <StyledContainer style={style} className={className}>
    {children}
  </StyledContainer>
);

export default Container;
