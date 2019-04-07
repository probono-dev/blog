import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/Logo';
import { styled } from 'linaria/react';

import { rhythm, scale } from '../utils/typography';

const Site = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const SiteHeader = styled.h1`
  ${scale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`;

const SiteLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const PostHeader = styled.h3`
  margin-top: 0;
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <SiteHeader>
          <SiteLink to={`/`}>
            <Logo /> {title}
          </SiteLink>
        </SiteHeader>
      );
    } else {
      header = (
        <PostHeader>
          <SiteLink to={`/`}>
            <Logo /> {title}
          </SiteLink>
        </PostHeader>
      );
    }
    return (
      <Site>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.github.com/danielkov">@danielkov</a>
          {` `}
          using
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          and hosted on
          {` `}
          <a href="httsp://www.netlify.com">Netlify</a>
        </footer>
      </Site>
    );
  }
}

export default Layout;
