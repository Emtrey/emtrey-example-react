import * as React from 'react';
import styled from '@emotion/styled';
import CtaButton from '../shared/cta-button';
import Container from '../shared/container';
import { dimensions, colors, breakpoints } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';

const StyledContainer = styled(Container)`
  padding-top: ${dimensions.spacerLarge};
  padding-bottom: ${dimensions.spacerLarge};
  display: flex;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const HomeFeaturesCtaText = styled.div`
  text-align: center;
  margin-right: ${dimensions.spacerLarge};
  @media (max-width: ${breakpoints.md}) {
    margin-right: 0;
  }
  > h6 {
    font-size: ${dimensions.headingSizes.h2}rem;
    @media (max-width: ${breakpoints.md}) {
      margin: 0;
    }
  }
  > p {
    color: ${colors.gray.copy};
  }
`;

const HomeFeaturesCtaButtonContainer = styled.div`
  ${flexCenter};
  margin-left: ${dimensions.spacerLarge};
  @media (max-width: ${breakpoints.md}) {
    margin-left: 0;
  }
`;

const HomeFeaturesCtaDivider = styled.i`
  background-color: ${colors.gray.light};
  width: 1px;
  display: block;
  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const HomeFeaturesCta: React.FunctionComponent = () => (
  <StyledContainer>
    <HomeFeaturesCtaText>
      <h6>Plus Much, Much More</h6>
      <p>Explore all of our amazing features in detail.</p>
    </HomeFeaturesCtaText>
    <HomeFeaturesCtaDivider />
    <HomeFeaturesCtaButtonContainer>
      <CtaButton link="/features" label="View All Features" />
    </HomeFeaturesCtaButtonContainer>
  </StyledContainer>
);

export default HomeFeaturesCta;
