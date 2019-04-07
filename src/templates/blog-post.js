import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import { styled } from 'linaria/react';

const ReadOn = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const Date = styled.p`
  ${scale(-1 / 5)};
`;

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    const { frontmatter } = post;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={frontmatter.title}
          description={frontmatter.description || post.excerpt}
        />
        <h1>{frontmatter.title}</h1>
        <Date>{frontmatter.date}</Date>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Divider />
        <Bio
          name={frontmatter.author}
          handle={frontmatter.authorHandle}
          plug={frontmatter.authorPlug}
        />

        <ReadOn>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ReadOn>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        authorHandle
        authorPlug
      }
    }
  }
`;
