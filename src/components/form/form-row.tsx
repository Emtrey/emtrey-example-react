import styled from '@emotion/styled';
import { colors } from '../../styles/variables';
import { placeholder, lighten } from 'polished';

const StyledFormRow = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  &.valid {
    input,
    textarea {
      border-bottom-color: ${colors.success};
    }
  }
  &.invalid {
    label {
      // color: ${colors.danger};
    }
    input,
    textarea {
      border-bottom-color: ${colors.danger};
      ${placeholder({ color: lighten(0.4, colors.danger) })};
    }
  }
  .ControlError {
    font-size: 0.92rem;
    color: ${colors.danger};
    padding: 0.8rem 1rem 0.4rem 1rem;
    &:empty {
      display: none;
    }
  }
  label {
    display: inline-block;
    cursor: pointer;
    margin-bottom: 0.4rem;
    margin-left: 1rem;
    color: ${colors.gray.copy};
  }
`;

const FormRow: React.FunctionComponent<{ className?: string }> = ({
  className,
  children,
}) => <StyledFormRow className={className}>{children}</StyledFormRow>;

export default FormRow;
