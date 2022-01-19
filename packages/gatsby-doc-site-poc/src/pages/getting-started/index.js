import * as React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';

const GettingStartedPage = ({ data }) => {
  return (
    <Layout pageTitle="Getting Started with the DS">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/getting-started/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/content/getting-started/" } }) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

export default GettingStartedPage;
