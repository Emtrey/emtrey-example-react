import styled from '@emotion/styled';
import Container from './container';
import CtaButton from './cta-button';
import { flexCenter } from '../../styles/mixins';
import { colors } from '../../styles/variables';

const IndexCta = styled(Container)`
  ${flexCenter};
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const CtaHero: React.FunctionComponent = () => (
  <IndexCta className="center">
    <h3>Unlock the potential of your store.</h3>
    <div style={{ marginBottom: '1rem', color: colors.gray.copy }}>
      Sign up for a free 7 day trial:
    </div>
    <CtaButton link="/signup" label="Start Free Trial" className="knockout" />
  </IndexCta>
);

export default CtaHero;
