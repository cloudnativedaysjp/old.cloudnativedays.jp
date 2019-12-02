/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
//  pathPrefix: `/foobar`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "cloudnativedaysjp-website",
        region: 'ap-northeast-1',
      },
    },
    `gatsby-transformer-remark`,
  ]
}
