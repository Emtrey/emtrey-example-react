import styled from '@emotion/styled';
import { colors, dimensions } from '../../styles/variables';
import { placeholder } from 'polished';

const input = `
  width: 100%;
  padding: 1rem;
  border: 0;
  border-bottom: 1px solid ${colors.gray.light};
  border-radius: ${dimensions.inputRadius};
  outline: none;
  transition: border-color 0.4s ease-out;
  &[disabled] {
    color: ${colors.gray.light};
    cursor: not-allowed;
  }
  &:focus {
    border-color: ${colors.brand};
  }
`;

const StyledInput = styled.input`
  ${input};
  ${placeholder({ color: colors.gray.light })};
`;

const StyledTextArea = styled.textarea`
  ${input};
  ${placeholder({ color: colors.gray.light })};
`;

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'tel' | 'date';
  inputId: string;
  value?: string;
  autoFocus?: boolean;
  placeholder?: string;
  disabled?: boolean;
  textarea?: boolean;
  onFocus?: (event: React.SyntheticEvent) => void;
  onBlur?: (event: React.SyntheticEvent) => void;
  onChange?: (event: React.SyntheticEvent) => void;
}

const Input: React.FunctionComponent<InputProps> = ({
  type = 'text',
  inputId,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  placeholder,
  textarea = false,
}) => {
  return textarea ? (
    <StyledTextArea
      id={inputId}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={placeholder}
    />
  ) : (
    <StyledInput
      type={type}
      id={inputId}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={placeholder}
      autoComplete="new-password"
    />
  );
};

export default Input;
