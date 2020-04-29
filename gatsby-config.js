module.exports = {
  siteMetadata: {
    title: "Serverless Events - A curated list of awesome serverless events around the world",
    author: "Gunnar Grosch",
    description: "A curated list of awesome serverless events around the world by and for the community"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-164897740-1",
        head: false,
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          title: 'Serverless Events - A curated list of awesome serverless events around the world',
          description: 'A curated list of awesome serverless events around the world by and for the community',
          images: [
            { url: 'https://cdn.grosch.se/serverlessevents/serverlessevents-card.png' },
          ],
          site_name: 'Serverless Events',
        },
        twitter: {
          handle: '@gunnargrosch',
          site: '@gunnargrosch',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
