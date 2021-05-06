import styled from '@emotion/styled';
import * as React from 'react';
import { HelpIcon } from './icons';
import { dimensions, colors, breakpoints } from '../../styles/variables';

export const StyledHelpBubble = styled.div`
  position: relative;
  svg {
    width: 16px;
    position: relative;
    top: 2px;
    left: 8px;
    cursor: help;
    fill: #aaa;
    &:hover {
      fill: ${colors.brand};
      + .Tip {
        opacity: 1;
        transform: none;
      }
    }
  }
`;

const Tip = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 240px;
  padding: 0.8rem;
  color: #eee;
  text-align: center;
  font-size: ${dimensions.fontSize.medium - 1}px;
  line-height: ${dimensions.lineHeight.medium};
  position: absolute;
  z-index: 9;
  bottom: 20px;
  left: 28px;
  border-radius: 4px 4px 4px 0;
  opacity: 0;
  transition: all 0.1s ease-out;
  transform-origin: 0 100%;
  transform: scale(0.8) translateY(10px);
  @media (max-width: ${breakpoints.md}) {
    min-width: calc(100vw - 100px);
  }
`;

const HelpBubble: React.FunctionComponent<{ text: string }> = ({ text }) => (
  <StyledHelpBubble>
    <HelpIcon />
    <Tip className="Tip">{text}</Tip>
  </StyledHelpBubble>
);

export default HelpBubble;
