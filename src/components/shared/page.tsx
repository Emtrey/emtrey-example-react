import styled from '@emotion/styled';
import { CSSProperties } from 'react';

const StyledPage = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 4rem;
`;

const Page: React.FunctionComponent<{
  style?: CSSProperties;
  className?: string;
}> = ({ children, className, style }) => (
  <StyledPage className={className} style={style}>
    {children}
  </StyledPage>
);

export default Page;
