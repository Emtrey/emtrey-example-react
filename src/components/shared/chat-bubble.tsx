import styled from '@emotion/styled';
import { colors, dimensions } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';
import { opacify } from 'polished';

const ChatBubble = styled.div`
  border: 1px solid ${colors.gray.light};
  border-radius: ${dimensions.borderRadius};
  border-top-left-radius: 0;
  padding: 0.52rem 1.6rem;
  white-space: nowrap;
  cursor: default;
  user-select: none;
  color: ${colors.gray.copy};
  margin-bottom: ${dimensions.spacers[0]};
  float: left;
  ${flexCenter};
  &:last-of-type {
    margin-bottom: 0;
  }
  &.is-active {
    background-color: ${colors.success};
    color: #fff;
    font-weight: 700;
    border-color: ${colors.success};
    box-shadow: 0 0 20px ${opacify(-0.2)(colors.success)};
  }
  &.is-client {
    float: right;
  }
`;

export default ChatBubble;
