import styled from '@emotion/styled';
import Container from '../shared/container';
import { dimensions, colors, breakpoints } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';
import StyledHeading from '../shared/styled-heading';
import HomeFeaturesCta from './home-features-cta';
import EngageFeature from './features/engage-feature';
import ProductQAFeature from './features/product-qa-feature';
import SocialFeature from './features/social-feature';
import ChatFeature from './features/chat-feature';

const FeatureInner = styled.div`
  ${flexCenter}
  width: 52%;
  height: 300px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    height: auto;
    display: block;
    padding: ${dimensions.spacer};
  }
`;

const FeatureText = styled.div`
  width: 80%;
  /* for text on the right */
  margin-left: 4rem;
  margin-right: 0;
  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  h2 {
    /* width: 88%; */
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
    }
  }
  p {
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
    }
    width: 88%;
    margin: 0;
    color: ${colors.gray.copy};
  }
`;

const FeatureGraphic = styled.div`
  ${flexCenter};
  width: 40%;
  position: relative;
  top: 2rem;
  justify-content: left;
  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    top: 1rem;
    padding: 2rem;
    /* transform: scale(0.8); */
  }
  svg {
    width: 48px;
    fill: ${colors.brand1};
  }
`;

const Feature = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 6rem;
  border-bottom: 1px solid ${colors.gray.light};
  &:nth-of-type(odd) {
    ${FeatureGraphic} {
      justify-content: center;
    }
    ${FeatureInner} {
      flex-direction: row-reverse;
      ${FeatureText} {
        /* for text on the left */
        margin-right: 2rem;
        margin-left: 0;
      }
    }
  }
  @media (max-width: ${breakpoints.lg}) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;

const HomeFeatures: React.FunctionComponent = () => (
  <Container className="center" style={{ padding: 0 }}>
    <Feature>
      <FeatureInner>
        <FeatureGraphic>
          <EngageFeature />
        </FeatureGraphic>
        <FeatureText>
          <StyledHeading>Engage and Capture</StyledHeading>
          <p>
            Collect and organize your users emails, product feedback, contact
            information and more. All in real time.
          </p>
        </FeatureText>
      </FeatureInner>
    </Feature>

    <Feature>
      <FeatureInner>
        <FeatureGraphic>
          <ChatFeature />
        </FeatureGraphic>
        <FeatureText>
          <StyledHeading>Powerful Chat and Live Events</StyledHeading>
          <p>
            Engage your users with customized greetings, media, website links,
            and more at any point during their session.
          </p>
        </FeatureText>
      </FeatureInner>
    </Feature>

    <Feature>
      <FeatureInner>
        <FeatureGraphic>
          <SocialFeature />
        </FeatureGraphic>
        <FeatureText>
          <StyledHeading>Better Social Sharing</StyledHeading>
          <p>
            Provide immediate rewards for your users who share your products
            on sites like Facebook, Twitter, Pinterest and more.
          </p>
        </FeatureText>
      </FeatureInner>
    </Feature>

    <Feature>
      <FeatureInner>
        <FeatureGraphic>
          <ProductQAFeature />
        </FeatureGraphic>
        <FeatureText>
          <StyledHeading>Product Questions and Answers</StyledHeading>
          <p>
            Create an on-page, searchable knowledge base for each product and
            your business so you can stop answering the same email every day.
          </p>
        </FeatureText>
      </FeatureInner>
    </Feature>

    {/* <Feature>
      <FeatureInner>
        <FeatureGraphic>
          <BlockIcon />
        </FeatureGraphic>
        <FeatureText>
          <StyledHeading>Works With Your Store</StyledHeading>
          <p>
            Support for Shopify, Woocommerce, custom-built stores and more.
          </p>
        </FeatureText>
      </FeatureInner>
    </Feature> */}

    <HomeFeaturesCta />
  </Container>
);

export default HomeFeatures;
