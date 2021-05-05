import styled from '@emotion/styled';
import { flexCenter } from '../../styles/mixins';
import { dimensions, colors } from '../../styles/variables';

const StyledChatAvatar = styled.div`
  ${flexCenter};
  background-color: ${colors.gray.calm};
  width: 36px;
  height: 36px;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 100px;
  position: absolute;
  top: -20px;
  left: -20px;
  line-height: 1.4;
  font-size: ${dimensions.fontSize.medium}px;
  font-weight: bold;
  overflow: hidden;
  > img {
    width: 360px;
    max-width: none;
    position: relative;
    top: 96px;
    left: 146px;
  }
`;

const ChatAvatar: React.FunctionComponent<{ initial?: string }> = ({
  initial,
  children,
}) => (
  <StyledChatAvatar>
    {initial}
    {children}
  </StyledChatAvatar>
);

export default ChatAvatar;
