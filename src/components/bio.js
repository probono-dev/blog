import React from 'react';
import { rhythm } from '../utils/typography';

function Bio({ name, handle, plug }) {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        alignItems: 'center'
      }}
    >
      <a
        href={`https://github.com/${handle}`}
        style={{
          textShadow: 'none',
          backgroundImage: 'none',
          marginRight: rhythm(1 / 2),
          width: 80,
          height: 80,
          marginBottom: 0,
          borderRadius: `100%`,
        }}
      >
        <img
          src={`https://github.com/${handle}.png?size=200`}
          alt={name}
        />
      </a>
      <p style={{ margin: 0 }}>
        Written by <strong>{name}</strong>, {plug}
      </p>
    </div>
  );
}

export default Bio;
