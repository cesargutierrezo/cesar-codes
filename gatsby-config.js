module.exports = {
  siteMetadata: {
    title: `César Gutiérrez Olivares - Frontend & Mobile Engineer`,
    description: `César Gutiérrez Olivares - Frontend & Mobile Engineer`,
    author: `César Gutiérrez Olivares`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `César Gutiérrez Olivares - Frontend & Mobile Engineer`,
        short_name: `cesar.codes`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `browser`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Poppins\:400,700`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/, // See below to configure properly
        },
      },
    },
  ],
}
