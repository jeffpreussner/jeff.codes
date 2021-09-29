import React from "react";
import { string, shape, object } from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const IndexPageTemplate = ({ subheading }) => (
  <div className="site__wrapper">
    <div className="site__text">
      <h1 className="site__detail">{subheading}</h1>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  subheading: string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout
      nav={[
        { text: "Recently Launched", url: frontmatter.recentLaunch },
        { text: "GitHub", url: frontmatter.gitHubUrl },
        { text: "LinkedIn", url: frontmatter.linkedInUrl },
      ]}
    >
      <IndexPageTemplate subheading={frontmatter.subheading} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: shape({
    markdownRemark: shape({
      frontmatter: object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        subheading
        linkedInUrl
        gitHubUrl
        recentLaunch
      }
    }
  }
`;
