module.exports = {
  siteMetadata: {
    title: `ProBono Blog`,
    author: `Daniel Kovacs`,
    description: `Architectural blog for ProBono platform to connect charitable talent with causes in need.`,
    siteUrl: `https://blog.probono.dev/`,
    social: {
      twitter: `DanyKovacs`,
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-137797856-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ProBono Blog`,
        short_name: `ProBono Blog`,
        start_url: `/`,
        background_color: `#fdf9f9`,
        theme_color: `#B8336A`,
        display: `minimal-ui`,
        icon: `content/assets/logo_design.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
