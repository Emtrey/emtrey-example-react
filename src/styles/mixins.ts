import { darken } from 'polished';
import { dimensions, colors } from './variables';

export const getEmSize = (size: number) => size / dimensions.fontSize.regular;

export const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

// shared between both `a` and `button` elements
export const ctaButton = `
  border: 1px solid ${colors.brand};
  border-radius: ${dimensions.borderRadius};
  padding: 0.6rem 2rem;
  display: inline-block;
  font-weight: 700;
  color: ${colors.brand};
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: .88;
    text-decoration: none;
  }
  &.secondary {
    ${flexCenter};
    border-color: transparent;
    color: ${colors.brand1};
    &:hover {
      svg {
        fill: #000;
        transform: translateX(2px);
      }
    }
    svg {
      width: 16px;
      display: block;
      fill: ${colors.brand1};
      margin-left: 12px;
      transition: all .2s ease-out;
    }
  }
  &[disabled] {
    border-color: ${colors.gray.light};
    color: ${colors.gray.light};
    pointer-events: none;
    cursor: default;
  }
  &.block {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  &.knockout {
    background-color: ${colors.brand};
    color: #fff;
    &[disabled] {
      background-color: ${colors.gray.dark};
      color: ${colors.gray.light};
    }
    &:hover {
      background-color: ${darken(0.04, colors.brand)};
    }
  }
  svg {
    display: none;
  }
`;
