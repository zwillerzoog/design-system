import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './DocSiteHeader';
import Footer from './DocSiteFooter';
import Nav from './DocSiteNav';

// TODO: generate this from content?
const items = [
  {
    defaultCollapsed: true,
    id: 'getting-started',
    items: [],
    label: 'Getting Started',
    url: '/',
  },
  {
    defaultCollapsed: true,
    items: [
      {
        defaultCollapsed: true,
        id: 'components/alert',
        items: null,
        label: 'Alert',
        url: '/components/alert',
      },
    ],
    label: 'Components',
  },
];

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="ds-base">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Header />
      <div className="ds-l-row ds-u-margin--0">
        <div className="ds-l-md-col--3 ds-u-padding--2 ds-u-fill--white docs__sidebar">
          <Nav items={items} selectedId="components/alert" />
        </div>
        <main className="ds-l-md-col ds-u-padding--0 ds-u-padding-bottom--4">
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
