export interface IMenuItem {
  text: string;
  href?: string;
  isSelected?: boolean;
  onClick: () => void;
}

export interface IMenuLabel {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

export interface IMenuList {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

export interface IMenuData {
  [key: string]: IMenuDataItem;
}

export interface IMenuDataItem {
  title: string;
  href: string;
}
