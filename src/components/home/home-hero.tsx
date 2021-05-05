import styled from '@emotion/styled';
import CtaButton from '../shared/cta-button';
import { dimensions, colors, breakpoints } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';
import HomeHeroImages from './home-hero-images';

const Hero = styled.div`
  background: radial-gradient(
    circle at top right,
    ${colors.brand1} 0%,
    ${colors.brand} 120%
  );
  padding-left: ${dimensions.spacers[3]};
  padding-right: ${dimensions.spacers[3]};
  padding-top: 5rem;
  padding-bottom: 6rem;
  display: flex;
  color: #fff;
  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    padding: ${dimensions.spacer};
  }
`;

const HeroText = styled.div`
  flex: 1;
  h2 {
    width: 60%;
    font-size: 3rem;
    line-height: 1.4;
    color: inherit;
    margin: 0 0 ${dimensions.spacerHalf} 0;
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
      text-align: center;
    }
  }
  p {
    width: 60%;
    opacity: 0.8;
    margin-bottom: 2.4rem;
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
      text-align: center;
    }
  }
`;

const HeroCtas = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.lg}) {
    ${flexCenter};
  }
  a {
    color: inherit;
    border-color: #fff;
    &.secondary {
      color: rgba(255, 255, 255, 0.8);
      @media (max-width: ${breakpoints.lg}) {
        padding-left: 1.4rem;
        padding-right: 1.4rem;
        margin-left: 0.4rem;
      }
      svg {
        fill: rgba(255, 255, 255, 0.8);
      }
      &:hover {
        svg {
          fill: #fff;
        }
      }
    }
  }
`;

const HomeHero: React.FunctionComponent = () => (
  <Hero>
    <HeroText>
      <h2>Take your ecommerce store to the next level.</h2>
      <p>
        StoreKick makes it easy to grow your ecommerce store and provide a
        unique shopping experience for all of your products.
      </p>
      <HeroCtas>
        <CtaButton link="/signup" label="Get Started" />
        <CtaButton
          link="/pricing"
          label="View Pricing"
          className="secondary"
          icon={true}
        />
      </HeroCtas>
    </HeroText>
    <HomeHeroImages />
  </Hero>
);

export default HomeHero;
