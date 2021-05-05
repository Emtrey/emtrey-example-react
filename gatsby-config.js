const tld = 'storekick.io';
const targetAddress = new URL(
  process.env.TARGET_ADDRESS || `https://www.${tld}`,
);

module.exports = {
  siteMetadata: {
    title: 'StoreKick',
    siteUrl: `https://${tld}`,
    portalUrl: `//portal.${tld}`,
    year: new Date().getFullYear(),
    api:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:9000/api/'
        : `//a.${tld}/api/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'storekick.io',
        protocol: 'https',
        hostname: targetAddress.hostname,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: targetAddress.href.slice(0, -1),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://storekick.io',
      },
    },
    {
      /** @todo: remove when pages go live */
      // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-sitemap/src/internals.js#L45
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [
          '/account-created',
          '/custom-store',
          '/shopify',
          '/woo-commerce',
          '/example',
          '/404',
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
};
