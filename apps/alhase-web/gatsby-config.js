module.exports = {
    siteMetadata: {
        title: 'Alexander Härenstam - Personal Website',
        author: 'Alexander Härenstam',
        description: 'Personal Website for Alexander Härenstam.',
    },
    plugins: [
        'gatsby-plugin-sass',

        {
            resolve: 'gatsby-plugin-svgr',
            options: {
                svgo: false,
                ref: true,
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
        {
            resolve: require.resolve(
                `@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`
            ),
            options: {
                path: __dirname,
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `AlexanderHaerenstam-PersonalWebsite`,
                short_name: `alhase`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.svg`,
            },
        },
    ],
}
