import React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Page from '../components/shared/page';
import Container from '../components/shared/container';
import IndexLayout from '../layouts';
import { dimensions, colors, breakpoints } from '../styles/variables';
import { Edges } from '../models';
import CtaHero from '../components/shared/cta-hero';
import PageHero from '../components/shared/page-hero';

const Features = styled(Container)`
  display: flex;
`;

const FeaturesNavContent = styled.div`
  flex: 1;
  margin-left: ${dimensions.spacer};
  .FeatureAnchor {
    &:before {
      content: '';
      display: block;
      position: relative;
      width: 0;
      height: 5em;
      margin-top: -5em;
    }
  }
  @media (max-width: ${breakpoints.md}) {
    margin-left: 0;
    text-align: center;
  }
`;

const FeatureSection = styled.section`
  border-bottom: 1px solid ${colors.gray};
  padding: ${dimensions.spacer};
  margin-bottom: ${dimensions.spacerHalf};
`;

const FeatureSectionHeading = styled.h2`
  font-size: ${dimensions.headingSizes.h1}rem;
  margin: ${dimensions.spacerHalf} 0 ${dimensions.spacerHalf} 0;
  text-transform: capitalize;
`;

const FeaturesSectionContent = styled.div`
  color: ${colors.gray.copy};
  > p {
    width: 88%;
    margin-bottom: ${dimensions.spacerHalf};
    line-height: 2.2;
    &:last-child {
      margin-bottom: 0;
    }
    @media (max-width: ${breakpoints.md}) {
      width: 100%;
    }
  }
`;

const FeaturesNavContainer = styled.div`
  width: 300px;
  display: flex;
  padding: ${dimensions.spacer};
  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

const FeaturesNav = styled.nav`
  &.is-fixed {
    position: fixed;
    top: 112px;
  }
  > a {
    height: 40px;
    display: block;
    color: ${colors.gray.copy};
    margin-top: ${dimensions.spacers[0]};
    > span {
      display: inline-block;
      position: relative;
      &:after {
        content: '';
        background-color: ${colors.brand};
        width: 0;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 0;
        transition: all 0.32s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
    &:hover {
      color: ${colors.brand};
      text-decoration: none;
    }
    &.is-active {
      color: ${colors.brand};
      cursor: default;
      pointer-events: none;
      font-weight: bold;
      > span {
        &:after {
          width: 100%;
        }
      }
    }
  }
`;

export interface FeaturePageProps {
  data: {
    allFeaturesJson: Edges<{
      id: string;
      name: string;
      heading: string;
      description: string;
    }>;
  };
}

class FeaturesPage extends React.PureComponent<FeaturePageProps, {}> {
  state = {
    isNavFixed: false,
    activeLinkIndex: -1,
  };

  featuresNavContainerRef = React.createRef<HTMLDivElement>();
  featuresNavContentRef = React.createRef<HTMLDivElement>();
  ctaRef = React.createRef<HTMLDivElement>();

  ctaTop = 0;
  navLinkTops: number[] = [];

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const ctaRefEl = this.ctaRef.current!;
    this.ctaTop = -(ctaRefEl.offsetTop - ctaRefEl.offsetHeight - 100);
    this.navLinkTops = Array.from(
      this.featuresNavContentRef.current!.querySelectorAll('a'),
    ).map(a => a.getBoundingClientRect().top);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const {
      top,
    } = this.featuresNavContainerRef.current!.getBoundingClientRect();
    const activeLinkIndex = this.navLinkTops.findIndex(
      l => l >= window.scrollY,
    );
    this.setState(() => ({
      activeLinkIndex,
      isNavFixed: top < 86 && top > this.ctaTop,
    }));
  };

  render() {
    const { edges } = this.props.data.allFeaturesJson;
    return (
      <IndexLayout title="Features">
        <Helmet
          meta={[
            {
              name: 'Description',
              content:
                'Features to grow your ecommerce store through marketing, social media, live chat and more.',
            },
          ]}
        />
        <Page>
          <PageHero>
            <h1>Our Kickin' Features</h1>
            How can we grow your customer base?
          </PageHero>

          <Features className="medium">
            <FeaturesNavContainer ref={this.featuresNavContainerRef}>
              <FeaturesNav
                className={this.state.isNavFixed ? 'is-fixed' : undefined}
              >
                {edges.map((feature, index) => (
                  <a
                    href={`#${feature.node.id}`}
                    key={index}
                    className={
                      this.state.activeLinkIndex === index
                        ? 'is-active'
                        : undefined
                    }
                  >
                    <span>{feature.node.name}</span>
                  </a>
                ))}
              </FeaturesNav>
            </FeaturesNavContainer>
            <FeaturesNavContent ref={this.featuresNavContentRef}>
              {edges.map((feature, index) => (
                <React.Fragment key={index}>
                  <a className="FeatureAnchor" id={feature.node.id} />
                  <FeatureSection>
                    <FeatureSectionHeading>
                      {feature.node.heading}
                    </FeatureSectionHeading>
                    <FeaturesSectionContent
                      dangerouslySetInnerHTML={{
                        __html: feature.node.description,
                      }}
                    />
                  </FeatureSection>
                </React.Fragment>
              ))}
            </FeaturesNavContent>
          </Features>

          <div ref={this.ctaRef}>
            <CtaHero />
          </div>
        </Page>
      </IndexLayout>
    );
  }
}

export default FeaturesPage;

export const pageQuery = graphql`
  query FeaturesQuery {
    allFeaturesJson(sort: { order: ASC, fields: sort }) {
      edges {
        node {
          id
          name
          heading
          description
        }
      }
    }
  }
`;
