import styled from '@emotion/styled';
import { colors, dimensions } from '../../styles/variables';

const StyledFormError = styled.div`
  background-color: ${colors.danger};
  padding: 1rem;
  margin-bottom: 1rem;
  color: #fff;
  border-radius: ${dimensions.borderRadius};
  text-align: center;
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: underline;
    display: inline-block;
    margin-left: 4px;
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const FormError: React.FunctionComponent = ({ children }) => (
  <StyledFormError>{children}</StyledFormError>
);

export default FormError;
