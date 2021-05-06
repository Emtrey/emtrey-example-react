import Helmet from 'react-helmet';
import IndexLayout from '../layouts';
import Page from '../components/shared/page';
import HomeHero from '../components/home/home-hero';
import HomeFeatures from '../components/home/home-features';
import HomeUsers from '../components/home/home-users';
import HomeProductsCta from '../components/home/home-products-cta';

const IndexPage: React.FunctionComponent<{ location: Location }> = ({
  location,
}) => (
  <IndexLayout location={location} title="Ecommerce Marketing and Live Chat">
    <Helmet
      meta={[
        {
          name: 'Description',
          content:
            'StoreKick is product marketing, social media sharing, live chat, and more for your online store.',
        },
      ]}
    />
    <Page style={{ marginBottom: 0 }}>
      <section>
        <HomeHero />
      </section>
      <section>
        <HomeFeatures />
      </section>
      <section>
        <HomeProductsCta />
      </section>
      <section>
        <HomeUsers />
      </section>
    </Page>
  </IndexLayout>
);

export default IndexPage;
