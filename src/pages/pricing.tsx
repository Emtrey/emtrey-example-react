import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { breakpoints, colors } from '../styles/variables';
import { flexCenter } from '../styles/mixins';
import { BillingType, Edges, Feature, Plan, Faq } from '../models';
import IndexLayout from '../layouts';
import Page from '../components/shared/page';
import Container from '../components/shared/container';
import FeatureTable from '../components/pricing/feature-table';
import Faqs from '../components/pricing/faqs';
import PricingQuoteCta from '../components/pricing/pricing-quote-cta';
import CtaHero from '../components/shared/cta-hero';
import PageHero from '../components/shared/page-hero';

const PlanContainer = styled.div`
  ${flexCenter}
  flex-direction: row;
  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }
`;

const StyledPlan = styled.div`
  border: 1px solid ${colors.gray.light};
  flex: 1;
  text-align: center;
  padding: 2rem;
  @media (max-width: ${breakpoints.lg}) {
    min-width: 100%;
    border-color: transparent;
  }
  &:first-of-type {
    border-right-color: transparent;
  }
  &:last-child {
    border-left-color: transparent;
  }
  .Plan-hint {
    ${flexCenter}
    height: 40px;
  }
  .Plan-feature {
    height: 20px;
  }
`;

const PlanHead = styled.div`
  cursor: default;
  text-align: center;
  h5 {
    color: ${colors.brand1};
  }
`;

const Price = styled.div`
  ${flexCenter}
  sup {
    margin: 0 4px 10px 0;
  }
  sub {
    margin: 10px 0 0 4px;
  }
`;

export interface PricingPageProps {
  data: {
    allPricingFeaturesJson: Edges<Feature>;
    allPlansJson: Edges<Plan>;
    allFaqsJson: Edges<Faq>;
  };
}

class PricingPage extends React.PureComponent<PricingPageProps, {}> {
  readonly billingTypes = BillingType;

  state = {
    billingType: BillingType.annual,
  };

  handleBillingSelectionChange = (billingType: BillingType) => {
    this.setState({ billingType });
  };

  render() {
    const { data } = this.props;
    const {
      allPricingFeaturesJson: features,
      allPlansJson: plans,
      allFaqsJson: faqs,
    } = data;
    return (
      <IndexLayout title="Pricing">
        <Helmet
          meta={[
            {
              name: 'Description',
              content:
                'Affordable ecommerce marketing and live chat pricing plans.',
            },
          ]}
        />
        <Page>
          <PageHero>
            <h1>StoreKick Pricing</h1>
            Amazing features for any sized store.
          </PageHero>

          <Container className="medium" style={{ paddingBottom: 0 }}>
            {/* <BillingSelector
              selectedType={this.state.billingType}
              onChange={this.handleBillingSelectionChange}
            /> */}

            <PlanContainer>
              {plans.edges.map(plan => (
                <StyledPlan key={plan.node.name}>
                  <PlanHead>
                    <h5>{plan.node.name}</h5>
                    <p>{plan.node.sessions},000 hola sessions / mo.</p>
                  </PlanHead>

                  <Price>
                    <sup>$</sup>
                    <h1>{plan.node.price[this.state.billingType]}</h1>
                    <sub>mo</sub>
                  </Price>

                  <small className="Plan-hint">{plan.node.tag}</small>
                </StyledPlan>
              ))}
            </PlanContainer>

            <FeatureTable plans={plans} features={features} />

            <PricingQuoteCta />
          </Container>

          <Faqs faqs={faqs} />

          <CtaHero />
        </Page>
      </IndexLayout>
    );
  }
}

export default PricingPage;

export const pageQuery = graphql`
  query PricingQuery {
    allPricingFeaturesJson {
      edges {
        node {
          id
          name
          help
        }
      }
    }
    allPlansJson {
      edges {
        node {
          # id
          tag
          name
          sessions
          price
          features
        }
      }
    }
    allFaqsJson(sort: { order: ASC, fields: sort }) {
      edges {
        node {
          question
          answer
          sort
        }
      }
    }
  }
`;
