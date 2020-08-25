import React from 'react';

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

export interface IStyledList extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  isExpanded?: boolean;
}

export interface IStyledListItem extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  isSelected?: boolean;
}
