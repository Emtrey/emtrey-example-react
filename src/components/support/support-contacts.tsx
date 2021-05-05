import styled from '@emotion/styled';
import { LifebuoyIcon, TwitterIcon, SmileIcon } from '../shared/icons';
import { dimensions, breakpoints, colors } from '../../styles/variables';

const StyledSupportContacts = styled.ul`
  @media (max-width: ${breakpoints.lg}) {
    padding: ${dimensions.spacers[3]} 0 0 0;
  }
  > li {
    margin-bottom: ${dimensions.spacer};
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: ${breakpoints.lg}) {
      display: block;
      text-align: center;
    }
    svg {
      width: 30px;
      height: 30px;
      fill: ${colors.gray.calm};
      margin-right: ${dimensions.spacer};
      @media (max-width: ${breakpoints.lg}) {
        margin: 0;
      }
    }
    h6 {
      margin-bottom: -2px;
      cursor: default;
    }
  }
`;

const SupportContacts: React.FunctionComponent = () => (
  <StyledSupportContacts>
    <li>
      <LifebuoyIcon />
      <div>
        <h6>Support through email:</h6>
        <a href="mailto:support@storekick.io">support@storekick.io</a>
      </div>
    </li>
    <li>
      <SmileIcon />
      <div>
        <h6>Just say hi:</h6>
        <a href="mailto:hi@storekick.io">hi@storekick.io</a>
      </div>
    </li>
    <li>
      <TwitterIcon />
      <div>
        <h6>On Twitter:</h6>
        <a href="https://twitter.com/storekickio">@storekickio</a>
      </div>
    </li>
  </StyledSupportContacts>
);

export default SupportContacts;
