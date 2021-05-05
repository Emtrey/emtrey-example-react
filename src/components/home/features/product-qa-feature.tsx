import styled from '@emotion/styled';
import { SearchIcon } from '../../shared/icons';
import ChatBubble from '../../shared/chat-bubble';
import { colors, dimensions } from '../../../styles/variables';

const ProductQAFeatureContainer = styled.div`
  width: 340px;
  position: relative;
  top: -34px;
  ${ChatBubble} {
    justify-content: left;
    padding-left: 1.2em;
    cursor: pointer;
    transform-origin: 0 0;
    transition: transform 0.2s ease-out;
    &:hover {
      transform: scale(1.08);
      > span {
        opacity: 1;
        transform: rotate(90deg) scale(1.2);
      }
    }
    > span {
      opacity: 0.4;
      color: inherit;
      margin-right: 12px;
      transition: transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s,
        opacity 0.2s linear 0.2s;
    }
  }
  > svg {
    display: block;
    fill: ${colors.gray.light};
    margin-bottom: ${dimensions.spacer};
  }
`;

const ProductQAFeature: React.FunctionComponent = () => (
  <ProductQAFeatureContainer>
    <SearchIcon />
    <ChatBubble>
      <span>+</span>
      What is your return policy?
    </ChatBubble>
    <ChatBubble className="is-active">
      <span>+</span>
      Is this blend of coffee fair trade?
    </ChatBubble>
  </ProductQAFeatureContainer>
);

export default ProductQAFeature;
