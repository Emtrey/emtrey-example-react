import styled from '@emotion/styled';
import CtaButton from '../shared/cta-button';
import { colors, dimensions, breakpoints } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';
import StyledHeading, { StyledH2 } from '../shared/styled-heading';
import * as products from '../../img/product/products.png';

const ProductsCtaOuter = styled.div`
  background-color: ${colors.brand1};
`;

const ProductsCtaInner = styled.div`
  ${flexCenter};
  flex-direction: row;
  margin: 0 auto;
  padding-top: 6rem;
  padding-bottom: 7rem;
  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const ProductsCtaImage = styled.div`
  max-width: 320px;
  margin-right: ${dimensions.spacerLarge};
  > img {
    width: 100%;
  }
  @media (max-width: ${breakpoints.lg}) {
    width: 200px;
    margin-left: 20px;
  }
`;

const ProductsCtaText = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  margin-left: ${dimensions.spacerLarge};
  color: #fff;
  @media (max-width: ${breakpoints.lg}) {
    margin-left: 0;
  }
  > ${StyledH2} {
    font-size: ${dimensions.headingSizes.h2 + 0.4}rem;
    margin-bottom: 2rem;
    &:before {
      background-color: rgba(255, 255, 255, 0.12);
    }
    @media (max-width: ${breakpoints.lg}) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
  > p {
    color: rgba(255, 255, 255, 0.72);
    margin-bottom: 3rem;
    @media (max-width: ${breakpoints.lg}) {
      width: 72%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
`;

const HomeProductsCtaButton = styled(CtaButton)`
  width: 220px;
  &.secondary {
    color: #fff;
    border-color: #fff;
  }
  @media (max-width: ${breakpoints.lg}) {
    margin: 0 auto;
  }
`;

const HomeProductsCta: React.FunctionComponent = () => (
  <ProductsCtaOuter className="center">
    <ProductsCtaInner>
      <ProductsCtaImage>
        <img src={products} />
      </ProductsCtaImage>
      <ProductsCtaText>
        <StyledHeading>Your Products, Front and Center</StyledHeading>
        <p>
          Unlike similar services, StoreKick was built from the ground up to
          focus on online ecommerce stores and products. We focus on the
          intent of increasing sales as much as possible and providing your
          users with an enhanced shopping experience.
        </p>
        <HomeProductsCtaButton
          label="Start Free Trial"
          link="/signup"
          className="secondary"
        />
      </ProductsCtaText>
    </ProductsCtaInner>
  </ProductsCtaOuter>
);

export default HomeProductsCta;
