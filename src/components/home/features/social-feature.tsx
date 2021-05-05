import styled from '@emotion/styled';
import {
  TwitterIcon,
  FacebookLikeIcon,
  PinterestIcon,
  FacebookLogoIcon,
  HeartIcon,
} from '../../shared/icons';
import ProductGraphic, {
  ProductGraphicLine,
} from '../../shared/product-graphic';
import { breakpoints } from '../../../styles/variables';

const SocialProduct = styled.div`
  width: 280px;
  height: 140px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -70px;
  margin-left: -80px;
`;

const SocialIcons = styled.div`
  width: 100%;
  height: 100%;
  > svg {
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    transition: transform 0.2s ease-in;
    &.TwitterIcon {
      top: 4px;
      left: 111px;
      fill: #5ff0f5;
    }
    &.FacebookLogoIcon {
      bottom: 32px;
      left: 58px;
      fill: #285df3;
    }
    &.FacebookLikeIcon {
      top: 27px;
      right: 12px;
      fill: #285df3;
    }
    &.PinterestIcon {
      bottom: 6px;
      right: 80px;
      fill: #d12a2a;
    }
    &.HeartIcon {
      display: none;
    }
  }
`;

const SocialFeatureContainer = styled.div`
  width: 340px;
  height: 200px;
  position: relative;
  top: -10px;
  @media (max-width: ${breakpoints.md}) {
    left: -28px;
  }
  &:hover {
    > ${SocialProduct} {
      ${ProductGraphicLine} {
        transform: scaleX(1.2);
      }
    }
    > ${SocialIcons} {
      > svg {
        transform: scale(1.4);
      }
    }
  }
`;

const SocialFeature: React.FunctionComponent = () => (
  <SocialFeatureContainer>
    <SocialProduct>
      <ProductGraphic />
    </SocialProduct>
    <SocialIcons>
      <TwitterIcon />
      <FacebookLikeIcon style={{ transitionDelay: '.08s' }} />
      <PinterestIcon style={{ transitionDelay: '.12s' }} />
      <FacebookLogoIcon style={{ transitionDelay: '.16s' }} />
      <HeartIcon />
    </SocialIcons>
  </SocialFeatureContainer>
);

export default SocialFeature;
