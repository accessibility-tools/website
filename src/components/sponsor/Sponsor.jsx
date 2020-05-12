import React from 'react';
import styled from 'styled-components';
import { icons } from '../../shared/icons';
import { spacing } from '../../shared/style';

const Logo = styled.svg`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;
  height: 1em;
  max-width: 100%;
  max-height: 100%;
  margin-left: ${spacing.padding.small}px ;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: ${props => (props.color || "currentColor")};
`;

const ShoutOut = styled.div`
  display: inline-flex;
  align-items: baseline;
  justify-content: flex-start;
  margin: 0 ${spacing.padding.large}px;
`

export function Sponsor ({ block, ...props}) {
  return (
    <ShoutOut>
      <p>Sponsored by</p>
      <Logo viewBox ="0 0 100 21" className="Logo" block={block}>
        <Path d={icons["FutuLogo"]}/>
      </Logo>
    </ShoutOut>
  )
}
