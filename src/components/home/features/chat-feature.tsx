import styled from '@emotion/styled';
import ChatBubble from '../../shared/chat-bubble';
import { colors, breakpoints } from '../../../styles/variables';
import ChatAvatar from '../../shared/chat-avatar';
import * as sabrina from '../../../img/product/sabrina.png';
import { flexCenter } from '../../../styles/mixins';

const ChatFeatureContainer = styled.div`
  width: 340px;
  margin-top: -10px;
  ${ChatBubble} {
    position: relative;
    transform: scale(0.88);
    @media (max-width: ${breakpoints.md}) {
      transform: none;
    }
    &:nth-of-type(3) {
      transform: none;
      margin-top: 1rem;
    }
    &.is-client {
      background-color: ${colors.brand1};
      color: #fff;
      border-color: transparent;
    }
  }
`;

const StyledChatStatus = styled.div`
  ${flexCenter};
  float: left;
  clear: right;
  margin: 1rem;
  > i {
    background-color: ${colors.success};
    width: 10px;
    height: 10px;
    border-radius: 10px;
    display: block;
    margin-right: 4px;
    opacity: 0;
    animation: load 1s infinite ease-in-out both;
  }
`;

const ChatStatus: React.FunctionComponent = () => (
  <StyledChatStatus>
    <i style={{ animationDelay: '0' }} />
    <i style={{ animationDelay: '.2s' }} />
    <i style={{ animationDelay: '.4s' }} />
  </StyledChatStatus>
);

export const ChatFeature: React.FunctionComponent = () => (
  <ChatFeatureContainer>
    <ChatBubble className="is-client">
      <ChatAvatar initial="M" />
      Are you a real person?
    </ChatBubble>
    <ChatBubble>
      <ChatAvatar>
        <img src={sabrina} />
      </ChatAvatar>
      Yes, don’t be silly ;)
    </ChatBubble>
    <ChatBubble className="is-client">
      <ChatAvatar initial="M" />
      Oh my god! That rules. Thanks!
    </ChatBubble>
    <ChatStatus />
  </ChatFeatureContainer>
);

export default ChatFeature;
