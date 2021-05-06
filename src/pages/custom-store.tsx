import Page from '../components/shared/page';
import Container from '../components/shared/container';
import IndexLayout from '../layouts';
import CtaHero from '../components/shared/cta-hero';
import PageHero from '../components/shared/page-hero';

const ShopifyPage: React.FunctionComponent = () => (
  <IndexLayout>
    <Page>
      <PageHero>
        <h1>StoreKick and Custom Ecommerce Stores</h1>
        Available for Premium members and above.
      </PageHero>

      <Container className="short">
        <p>
          StoreKick Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Augue neque gravida in fermentum et sollicitudin ac. Mi bibendum
          neque egestas congue quisque egestas diam. Egestas pretium aenean
          pharetra magna. Malesuada pellentesque elit eget gravida. Egestas
          sed sed risus pretium quam vulputate dignissim suspendisse in.
          Sollicitudin nibh sit amet commodo nulla facilisi nullam.
        </p>
        <p>
          Ornare quam viverra orci sagittis eu volutpat odio. Sem integer
          vitae justo eget magna fermentum iaculis. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Proin nibh nisl condimentum id
          venenatis a condimentum vitae.
        </p>
        <p>
          A iaculis at erat pellentesque. Quis commodo odio aenean sed. Nec
          feugiat nisl pretium fusce id velit. Ornare suspendisse sed nisi
          lacus sed viverra tellus in. Nascetur ridiculus mus mauris vitae
          ultricies leo. Morbi blandit cursus risus at ultrices mi. Id
          interdum velit laoreet id donec ultrices tincidunt arcu. Elit ut
          aliquam purus sit amet. Congue quisque egestas diam in. Id leo in
          vitae turpis. Molestie nunc non blandit massa enim nec dui. Nunc
          mattis enim ut tellus elementum sagittis vitae et leo. Eu mi
          bibendum neque egestas. Accumsan tortor posuere ac ut consequat
          semper. Arcu non sodales neque sodales ut etiam sit.
        </p>
      </Container>
      <CtaHero />
    </Page>
  </IndexLayout>
);

export default ShopifyPage;
