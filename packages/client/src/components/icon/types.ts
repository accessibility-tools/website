import React from 'react';

export type SVGProps = React.ComponentPropsWithRef<'svg'>


export interface IIcon extends ISVG, SVGProps {
  icon: string;
  color?: string;
  alt?: string;
}

export interface ISVG {
  block?: boolean;
}

export interface IArrowIcon extends IIcon {
  direction: string;
  isExpanded?: boolean;
}
