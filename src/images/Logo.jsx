import React from 'react';

const SvgComponent = ({ svgRef, ...props }) => (
  <svg
    baseProfile="tiny"
    viewBox="0 0 560 480"
    shapeRendering="crispEdges"
    height="1em"
    width="1.167em"
    ref={svgRef}
    {...props}
  >
    <path fill="#CB6A92" d="M0 0h80v80H0z" />
    <path fill="#C45885" d="M80 0h80v80H80z" />
    <path fill="#BE4577" d="M160 0h80v80h-80z" />
    <path fill="#B8336A" d="M240 0h80v80h-80z" />
    <path fill="#C45885" d="M0 80h80v80H0z" />
    <path fill="#BE4577" d="M0 160h80v80H0z" />
    <path fill="#A82F61" d="M80 240h80v80H80z" />
    <path fill="#972A57" d="M160 240h80v80h-80z" />
    <path fill="#86264E" d="M240 240h80v80h-80z" />
    <path fill="#685D56" d="M240 320h80v80h-80z" />
    <path fill="#72665E" d="M240 400h80v80h-80z" />
    <path fill="#7E736C" d="M320 400h80v80h-80z" />
    <path fill="#8B817B" d="M400 400h80v80h-80z" />
    <path fill="#988F89" d="M480 400h80v80h-80z" />
    <path fill="#8B817B" d="M480 320h80v80h-80z" />
    <path fill="#7E736C" d="M480 240h80v80h-80z" />
    <path fill="#685D56" d="M400 160h80v80h-80z" />
    <path fill="#5E544D" d="M320 160h80v80h-80z" />
    <path fill="#972A57" d="M240 160h80v80h-80z" />
    <path fill="#A82F61" d="M240 80h80v80h-80z" />
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <SvgComponent svgRef={ref} {...props} />
));
export default ForwardRef;
