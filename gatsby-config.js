module.exports = {
  siteMetadata: {
    title: `Wordpress + Gatsby + Graphql`,
    description: `Using WordPress as CMS with React`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://10taclesng.com/graphql`,
        // below is only added because there were some issues with pulling some media nodes and it kept stopping gatsby develop
        html: {
          createStaticFiles: false,
            useGatsbyImage: false,
        },
        type: {
            MediaItem: { lazyNodes: true },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}