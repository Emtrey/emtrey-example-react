import styled from '@emotion/styled';
import { DotsIcon } from './icons';
import { breakpoints, colors } from '../../styles/variables';

const StyledButton = styled.button`
  background-color: transparent;
  position: relative;
  z-index: 10;
  border: 0;
  margin-left: auto;
  outline: none;
  display: none;
  transition: transform 0.32s ease-out;
  @media (max-width: ${breakpoints.lg}) {
    display: flex;
  }
  &.is-active {
    svg {
      fill: #fff;
      transform: scale(1.2) rotate(90deg);
    }
  }
  svg {
    position: absolute;
    fill: ${colors.gray.dark};
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 2);
    top: -8px;
    left: -11px;
  }
`;

const MobileNavToggle: React.FunctionComponent<{
  active: boolean;
  onClick?: () => void;
}> = ({ active, onClick }) => (
  <StyledButton
    onClick={onClick}
    className={active ? 'is-active' : undefined}
  >
    <DotsIcon />
  </StyledButton>
);

export default MobileNavToggle;
