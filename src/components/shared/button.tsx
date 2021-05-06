import styled from '@emotion/styled';

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
`;

const Button: React.FunctionComponent<{
  onClick?: any;
  className?: string;
}> = ({ onClick, className, children }) => (
  <StyledButton className={className} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
