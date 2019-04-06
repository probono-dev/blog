import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/Logo';
import { styled } from 'linaria/react';

import { rhythm, scale } from '../utils/typography';
import { Underline } from './Underline';

const SiteHeader = styled.h1`
  font-size: ${scale(1.5).fontSize};
  line-height: ${scale(1.5).lineHeight};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`;

const SiteLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
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
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <SiteLink to={`/`}>
            <Logo /> {title}
          </SiteLink>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
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
      </div>
    );
  }
}

export default Layout;
