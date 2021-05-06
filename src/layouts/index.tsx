import * as React from 'react';
import 'modern-normalize';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/shared/header';
import LayoutRoot from '../components/layout/layout-root';
import LayoutMain from '../components/layout/layout-main';
import Footer from '../components/shared/footer';
import { Edges, NavLink } from '../models';
import favicon from '../img/favicon.png';

/* eslint-disable */

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      year: string;
      api: string;
      siteUrl: string;
    };
  };
  allNavigationJson: Edges<NavLink>;
};

const IndexLayout: React.FunctionComponent<{
  location?: Location;
  title?: string;
}> = ({ children, location, title }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            year
            api
            siteUrl
          }
        }
        allNavigationJson {
          edges {
            node {
              title
              href
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          // display the page's title first if present as prop
          title={
            title
              ? `${title} | ${data.site.siteMetadata.title}`
              : data.site.siteMetadata.title
          }
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <meta
            name="google-site-verification"
            content="1y6tW6O0dEKfFOIqiZbhzuAGn79PxMLWu21aea-MCtM"
          />
          <script>
            {`window.skick=window.skick||function(){(window.skick.i = arguments)}; skick('H-cAsNfQ')`}
          </script>
          <script src="https://cdn.storekick.io/sk.js" async defer />
          />
        </Helmet>
        <Header
          transparent={location && location.pathname === '/' ? true : false}
          links={data.allNavigationJson}
        />
        <LayoutMain>{children}</LayoutMain>
        <Footer year={data.site.siteMetadata.year} />
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
