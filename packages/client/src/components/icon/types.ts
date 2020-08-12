export interface IIcon extends ISVG {
  icon: string;
  color?: string;
}

export interface ISVG {
  block?: boolean;
}

export interface IArrowIcon extends IIcon {
  direction: string;
  isExpanded?: boolean;
}
