import styled from '@emotion/styled';
import { colors } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';

const productColor = colors.gray.light;

const ProductGraphicOutline = styled.div`
  width: 200px;
  height: 120px;
  border: 2px solid ${productColor};
  border-radius: 4px;
  ${flexCenter};
`;

const ProductGraphicContent = styled.div`
  width: 72%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const ProductGraphicImage = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid ${productColor};
  border-radius: 3px;
  margin-right: 1rem;
`;

const ProductGraphicLines = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductGraphicLine = styled.div`
  background-color: ${productColor};
  height: 4px;
  border-radius: 100px;
  margin-top: 4px;
  transform-origin: 0 0;
  transition: transform 0.2s ease-out;
  &:first-of-type {
    margin-top: 8px;
  }
  &:nth-of-type(2) {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

const ProductGraphic: React.FunctionComponent = () => (
  <ProductGraphicOutline>
    <ProductGraphicContent>
      <ProductGraphicImage />
      <ProductGraphicLines>
        <ProductGraphicLine style={{ width: 16 }} />
        <ProductGraphicLine style={{ width: 60, transitionDelay: '.1s' }} />
        <ProductGraphicLine style={{ width: 36, transitionDelay: '.2s' }} />
      </ProductGraphicLines>
    </ProductGraphicContent>
  </ProductGraphicOutline>
);

export default ProductGraphic;
