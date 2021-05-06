import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import IndexLayout from '../layouts';
import Page from '../components/shared/page';
import Container from '../components/shared/container';

// https://github.com/gatsbyjs/gatsby/issues/5329
const browser = typeof window !== 'undefined' && window;

const NotFoundPage = () => {
  return (
    browser && (
      <IndexLayout title="Not Found">
        <Helmet
          meta={[
            {
              name: 'robots',
              content: 'noindex',
            },
          ]}
        />
        <Page>
          <Container style={{ paddingTop: '8rem' }}>
            <h1>404: Page not found.</h1>
            <p>
              You've hit the void. <Link to="/">Go back.</Link>
            </p>
          </Container>
        </Page>
      </IndexLayout>
    )
  );
};

export default NotFoundPage;
