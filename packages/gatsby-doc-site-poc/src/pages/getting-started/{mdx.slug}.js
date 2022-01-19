import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const GettingStartedSubPage = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

export default GettingStartedSubPage;
