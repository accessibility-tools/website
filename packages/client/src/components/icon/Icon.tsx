import React from 'react';
import styled from 'styled-components';
import { icons } from '../../shared/icons';
import { IIcon, ISVG, SVGProps } from './types';

const Svg = styled.svg<ISVG>`
  display: ${({ block }) => block ? 'block' : 'inline-block'};
  height: 1em;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: ${({ color }) => color || 'currentColor'};
`;

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
const Icon: React.FC<IIcon> = ({ block, icon, color, alt, ...props }) => (
  <Svg
    viewBox="0 0 16 16"
    className="icon"
    block={block}
    aria-labelledby="svgTitle svgDesc"
    {...props as SVGProps}
  >
    <title id="svgTitle">{alt}</title>
    <desc id="svgDesc">{alt}</desc>
    <Path
      d={icons[icon]}
      color={color}
    />
  </Svg>
);

export default Icon;
