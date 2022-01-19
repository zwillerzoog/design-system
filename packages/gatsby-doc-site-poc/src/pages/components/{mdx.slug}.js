import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Tabs, TabPanel } from '@cmsgov/design-system';
import Storybookiframe from '../../components/Storybookiframe';

const ComponentPage = ({ data }) => {
  const componentData = data.allMdx.nodes.reduce((acc, node) => {
    const brand = node.frontmatter.brand || 'core';
    return {
      ...acc,
      [brand]: node,
    };
  }, {});

  return (
    <Layout pageTitle={componentData.core.frontmatter.title}>
      <Tabs>
        <TabPanel id="core" tab="Core">
          <Storybookiframe componentName={componentData.core.frontmatter.componentName} />
          <MDXRenderer>{componentData.core.body}</MDXRenderer>
        </TabPanel>
        <TabPanel id="healthcare" tab="Healthcare">
          <MDXRenderer>{componentData.healthcare.body}</MDXRenderer>
        </TabPanel>
        <TabPanel id="medicare" tab="Medicare">
          [Some medicare content here]
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

// TODO: 'alert' is hard-coded for now. Remove and make dynamic
export const query = graphql`
  query {
    allMdx(
      filter: { slug: { regex: "/alert/" }, fileAbsolutePath: { regex: "/content/components/" } }
    ) {
      nodes {
        frontmatter {
          title
          brand
          componentName
        }
        id
        slug
        body
      }
    }
  }
`;

export default ComponentPage;
