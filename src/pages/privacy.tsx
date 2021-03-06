import Page from '../components/shared/page';
import Container from '../components/shared/container';
import IndexLayout from '../layouts';
import PageHero from '../components/shared/page-hero';

const PrivacyPage = () => (
  <IndexLayout title="Privacy Policy">
    <Page>
      <PageHero>
        <h1>Privacy Policy</h1>
      </PageHero>
      <Container className="short">
        <p>
          This Privacy Policy governs the manner in which storekick.io
          collects, uses, maintains and discloses information collected from
          users (each, a "User") of the storekick.io website ("Site"). This
          privacy policy applies to the Site and all products and services
          offered by storekick.io.
        </p>
        <strong>Personal identification information</strong>
        <p>
          We may collect personal identification information from Users in a
          variety of ways, including, but not limited to, when Users visit our
          site, register on the site, and in connection with other activities,
          services, features or resources we make available on our Site. Users
          may be asked for, as appropriate, email address. Users may, however,
          visit our Site anonymously. We will collect personal identification
          information from Users only if they voluntarily submit such
          information to us. Users can always refuse to supply personally
          identification information, except that it may prevent them from
          engaging in certain Site related activities.
        </p>
        <strong>Non-personal identification information</strong>
        <p>
          We may collect non-personal identification information about Users
          whenever they interact with our Site. Non-personal identification
          information may include the browser name, the type of computer and
          technical information about Users means of connection to our Site,
          such as the operating system and the Internet service providers
          utilized and other similar information.
        </p>
        <strong>Web browser cookies</strong>
        <p>This Site does not utilize cookies in any method.</p>
        <strong>How we use collected information</strong>
        <p>
          storekick.io collects and uses Users personal information for the
          following purposes:
        </p>
        <ul>
          <li>
            To personalize user experience: We may use information in the
            aggregate to understand how our Users as a group use the services
            and resources provided on our Site.
          </li>
          <li>
            To improve our Site: We continually strive to improve our website
            offerings based on the information and feedback we receive from
            you.
          </li>
          <li>
            To send periodic emails: If User decides to opt-in to our mailing
            list, they will receive emails that may include company news,
            updates, related product or service information, etc. If at any
            time the User would like to unsubscribe from receiving future
            emails, we include detailed unsubscribe instructions at the bottom
            of each email or User may contact us via our Site.
          </li>
        </ul>
        <strong>How we protect your information</strong>
        <p>
          We adopt appropriate data collection, storage and processing
          practices and security measures to protect against unauthorized
          access, alteration, disclosure or destruction of your personal
          information, username, password, transaction information and data
          stored on our Site.
        </p>
        <strong>Sharing your personal information</strong>
        <p>
          We do not sell, trade, or rent Users personal identification
          information to others. We may share generic aggregated demographic
          information not linked to any personal identification information
          regarding visitors and users with our business partners, trusted
          affiliates and advertisers for the purposes outlined above.
        </p>
        <strong>Changes to this privacy policy</strong>
        <p>
          storekick.io has the discretion to update this privacy policy at any
          time. When we do, we will post a notification on the main page of
          our Site, revise the updated date at the bottom of this page. We
          encourage Users to frequently check this page for any changes to
          stay informed about how we are helping to protect the personal
          information we collect. You acknowledge and agree that it is your
          responsibility to review this privacy policy periodically and become
          aware of modifications.
        </p>
        <strong>Your acceptance of these terms</strong>
        <p>
          By using this Site, you signify your acceptance of this policy. If
          you do not agree to this policy, please do not use our Site. Your
          continued use of the Site following the posting of changes to this
          policy will be deemed your acceptance of those changes.
        </p>
        <strong>Contacting us</strong>
        <p>
          If you have any questions about this Privacy Policy, the practices
          of this site, or your dealings with this site,
          <a href="mailto:support@storekick.io" style={{ marginLeft: '4px' }}>
            please email us
          </a>
          .
        </p>
      </Container>
    </Page>
  </IndexLayout>
);

export default PrivacyPage;
