export interface IIcon extends IPath, ISVG {
  icon: string;
}

export interface IPath {
  color?: string;
  props?: any;
}

export interface ISVG {
  block?: boolean;
  props?: any;
}
