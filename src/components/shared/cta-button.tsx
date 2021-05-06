import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ctaButton } from '../../styles/mixins';
import { Test } from './icons';

const StyledLink = styled(Link)`
  ${ctaButton};
`;

const StyledButton = styled.button`
  ${ctaButton};
`;

const CtaButton: React.FunctionComponent<{
  className?: string;
  link?: string;
  label: string;
  disabled?: boolean;
  icon?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
}> = ({ link, label, disabled, className, onClick, icon = false }) => {
  return link !== undefined ? (
    <StyledLink to={link} className={className}>
      {label}
      {icon && <Test />}
    </StyledLink>
  ) : (
    <StyledButton onClick={onClick} disabled={disabled} className={className}>
      {label}
      {icon && <Test />}
    </StyledButton>
  );
};

export default CtaButton;
