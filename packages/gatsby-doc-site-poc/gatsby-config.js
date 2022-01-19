module.exports = {
  siteMetadata: {
    title: `CMS Design System`,
    siteUrl: `https://design.cms.gov`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `getting-started`,
        path: `${__dirname}/content/getting-started`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `components`,
        path: `${__dirname}/content/components`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `components`,
        path: `${__dirname}/content/components/healthcare`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `components`,
        path: `${__dirname}/../design-system/src/components`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-transformer-react-docgen',
      options: {
        babelrcRoots: ['../design-system/src/components/*'],
      },
    },
  ],
};
