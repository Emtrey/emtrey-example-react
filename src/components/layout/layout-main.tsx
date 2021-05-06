import styled from '@emotion/styled';
import { dimensions } from '../../styles/variables';

const StyledLayoutMain = styled.main`
  /* margin-top: ${dimensions.headerHeight}px; */
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LayoutMain: React.FunctionComponent<{
  className?: string;
}> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children} Hola</StyledLayoutMain>
);

export default LayoutMain;
