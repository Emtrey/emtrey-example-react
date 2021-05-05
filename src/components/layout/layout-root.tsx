import * as React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import normalize from '../../styles/normalize';
import global from '../../styles/global';

const StyledLayoutRoot = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LayoutRoot: React.FunctionComponent<{
  className?: string;
}> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize, global)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
