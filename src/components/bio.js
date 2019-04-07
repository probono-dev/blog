import React from 'react';
import { rhythm } from '../utils/typography';
import { styled } from 'linaria/react';

const BioContainer = styled.section`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
  align-items: center;
`;

const LogoLink = styled.a`
  text-shadow: none;
  background-image: none;
  margin-right: ${rhythm(1 / 2)};
  width: 80px;
  height: 80px;
  margin-bottom: 0;
  border-radius: 100%;
`;

const Plug = styled.p`
  margin: 0;
`;

function Bio({ name, handle, plug }) {
  return (
    <BioContainer>
      <LogoLink href={`https://github.com/${handle}`}>
        <img src={`https://github.com/${handle}.png?size=200`} alt={name} />
      </LogoLink>
      <Plug>
        Written by <strong>{name}</strong>, {plug}
      </Plug>
    </BioContainer>
  );
}

export default Bio;
