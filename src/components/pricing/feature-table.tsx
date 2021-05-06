import styled from '@emotion/styled';
import { Plan, Feature, Edges } from '../../models';
import { dimensions, colors, breakpoints } from '../../styles/variables';
import { CheckIcon } from '../shared/icons';
import HelpBubble, { StyledHelpBubble } from '../shared/help-bubble';

const StyledFeatureTable = styled.div`
  margin-top: ${dimensions.spacer};
  margin-bottom: ${dimensions.spacer};
  .FeatureTable-offset {
    flex-basis: 30%;
    position: relative;
    @media (max-width: ${breakpoints.md}) {
      width: 100%;
      justify-content: center;
    }
  }
  .tbody .FeatureTable-offset {
    justify-content: flex-start;
    @media (max-width: ${breakpoints.md}) {
      justify-content: center;
    }
  }
  .FeatureTable-cell svg {
    fill: ${colors.brand1};
  }
  ${StyledHelpBubble} {
    @media (max-width: ${breakpoints.md}) {
      position: absolute;
      left: 4px;
    }
  }
`;

const FeatureCells = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.md}) {
    min-width: 100%;
    justify-content: center;
  }
`;

const FeatureTable: React.FunctionComponent<{
  plans: Edges<Plan>;
  features: Edges<Feature>;
}> = ({ plans, features }) => (
  <StyledFeatureTable>
    {/* plan headings */}
    <div className="tr FeatureTable-head">
      <div className="FeatureTable-offset" />
      <FeatureCells>
        {plans.edges.map(plan => (
          <div className="td" key={plan.node.name}>
            {plan.node.name}
          </div>
        ))}
      </FeatureCells>
    </div>
    <div className="tbody">
      {features.edges.map(feature => (
        <div className="tr FeatureTable-row" key={feature.node.name}>
          {/* plan name */}
          <div className="td FeatureTable-offset">
            {feature.node.name}
            {feature.node.help && <HelpBubble text={feature.node.help} />}
          </div>
          <FeatureCells>
            {/* feature cells */}
            {plans.edges.map(plan => (
              <div className="td FeatureTable-cell" key={plan.node.name}>
                {plan.node.features.find(pf => pf === feature.node.id) !==
                undefined ? (
                  <CheckIcon />
                ) : null}
              </div>
            ))}
          </FeatureCells>
        </div>
      ))}
    </div>
  </StyledFeatureTable>
);

export default FeatureTable;
