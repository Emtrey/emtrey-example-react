import styled from '@emotion/styled';
import { colors, dimensions, breakpoints } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';
import CtaButton from '../shared/cta-button';

const StyledPricingQuoteCta = styled.div`
  border: 1px solid ${colors.gray.light};
  padding: ${dimensions.spacer};
  margin-top: ${dimensions.spacer};
  margin-bottom: ${dimensions.spacer};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
  .PricingMax-text {
    flex: 1;
    h6 {
      font-size: ${dimensions.fontSize.regular + 1}px;
      margin: 0 0 ${dimensions.spacers[0]} 0;
    }
  }
  .PricingMax-textBody {
    width: 74%;
    line-height: 1.6;
    font-size: ${dimensions.fontSize.medium}px;
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
      margin-bottom: ${dimensions.spacerHalf};
    }
  }
  .PricingMax-cta {
    ${flexCenter};
    min-width: 200px;
    a {
      @media (max-width: ${breakpoints.lg}) {
        padding: 0;
      }
    }
  }
`;

const PricingQuoteCta: React.FunctionComponent = () => (
  <StyledPricingQuoteCta>
    <div className="PricingMax-text">
      <h6>Need More Sessions?</h6>
      <div className="PricingMax-textBody">
        Do you have a high-traffic store? We'd love to work with you to
        provide a tailored solution for your online store.
      </div>
    </div>
    <div className="PricingMax-cta">
      <CtaButton
        link="/support"
        label="Get A Custom Quote"
        className="secondary"
        icon={true}
      />
    </div>
  </StyledPricingQuoteCta>
);

export default PricingQuoteCta;
