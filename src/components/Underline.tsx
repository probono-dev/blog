import { styled } from 'linaria/react';
import { linkColor, backgroundColor } from '../style/theme';

export const Underline = styled.span`
  text-shadow: 0.03em 0 ${backgroundColor}, -0.03em 0 ${backgroundColor},
    0 0.03em ${backgroundColor}, 0 -0.03em ${backgroundColor},
    0.06em 0 ${backgroundColor}, -0.06em 0 ${backgroundColor},
    0.09em 0 ${backgroundColor}, -0.09em 0 ${backgroundColor},
    0.12em 0 ${backgroundColor}, -0.12em 0 ${backgroundColor},
    0.15em 0 ${backgroundColor}, -0.15em 0 ${backgroundColor};
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 1px,
    ${linkColor} 1px,
    ${linkColor} 2px,
    rgba(0, 0, 0, 0) 2px
  );

  :hover {
      text-shadow: none;
      background-image: none;
  }
`;
