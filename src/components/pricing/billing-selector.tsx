import styled from '@emotion/styled';
import { flexCenter } from '../../styles/mixins';
import Button from '../shared/button';
import { colors } from '../../styles/variables';
import { BillingType } from '../../models';

// Do we really need this?
// Just charge a flat sub fee for mvp ya dingus.
// Check it out.

const StyledContainer = styled.div`
  ${flexCenter}
  margin-bottom: 2rem;
  button {
    background-color: #eee;
    padding: 1rem 2rem;
    &.is-active {
      background-color: ${colors.gray.light};
    }
    &:first-of-type {
      border-radius: 100px 0 0 100px;
    }
    &:last-child {
      border-radius: 0 100px 100px 0;
    }
  }
`;

const BillingSelector: React.FunctionComponent<{
  selectedType: BillingType;
  onChange: (type: BillingType) => void;
}> = ({ selectedType, onChange }) => (
  <StyledContainer>
    <Button
      onClick={() => onChange(BillingType.annual)}
      className={
        selectedType === BillingType.annual ? 'is-active' : undefined
      }
    >
      Annual Billing
    </Button>
    <Button
      onClick={() => onChange(BillingType.monthly)}
      className={
        selectedType === BillingType.monthly ? 'is-active' : undefined
      }
    >
      Monthly Billing
    </Button>
  </StyledContainer>
);

export default BillingSelector;
