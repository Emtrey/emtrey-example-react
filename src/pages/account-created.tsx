import styled from '@emotion/styled';
import Page from '../components/shared/page';
import Container from '../components/shared/container';
import IndexLayout from '../layouts';
import { ctaButton } from '../styles/mixins';
import PageHero from '../components/shared/page-hero';

const StyledLink = styled.a`
  ${ctaButton};
`;

const AccountCreatedPage: React.FunctionComponent = () => (
  <IndexLayout title="Account Created">
    <Page>
      <PageHero>
        <h1>Account Created</h1>
        Thanks for signing up!
      </PageHero>
      <Container className="short">
        <p>Please check your email address for further instructions.</p>
        <p>You will now be able to access the StoreKick portal</p>
        <StyledLink href="http://portal.storekick.io">
          Login To Portal
        </StyledLink>
      </Container>
    </Page>
  </IndexLayout>
);

export default AccountCreatedPage;
