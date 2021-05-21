import styled from '@emotion/styled';
import ChatBubble from '../../shared/chat-bubble';

const emojiOpacity = 0.4;

const EmojiBubble = styled(ChatBubble)`
  width: 360px;
  height: 112px;
  font-size: 2.8rem;
  transform: none;
  &:hover {
    span:nth-of-type(3) {
      transform: none;
      opacity: ${emojiOpacity};
    }
  }
  > span {
    width: 50px;
    height: 50px;
    line-height: 1.2;
    display: inline-block;
    margin-right: 1.4rem;
    opacity: ${emojiOpacity};
    cursor: pointer;
    transform-origin: 50% 50%;
    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover,
    &:nth-of-type(3):hover {
      transform: scale(1.4);
      opacity: 1;
    }
    &:nth-of-type(3) {
      transform: scale(1.4);
      opacity: 1;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const EngageFeature: React.FunctionComponent = () => (
  <div>
    <ChatBubble>How do you like these kicks?</ChatBubble>
    <EmojiBubble>
      <span>😐</span>
      <span>😐</span>
      <span>😀</span>
      <span>😍</span>
    </EmojiBubble>
    <ChatBubble className="is-active is-client">
      Thank you for your feedback!
    </ChatBubble>
  </div>
);

export default EngageFeature;
