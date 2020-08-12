export interface IIcon extends ISVG {
  icon: string;
  color?: string;
}

export interface ISVG {
  block?: boolean;
}

export interface IStyledArrowIcon {
  icon: string;
  color?: string;
  direction?: string;
  isExpanded?: boolean;
}
