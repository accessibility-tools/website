import React from 'react';

export interface ISwitcher {
  threshold?: string;
  width?: string;
  space?: string;
}

export interface IStack {
  space?: string;
  width?: string;
  itemsAlign?: string;
}

export interface ILayout {
  children?:
    | React.ReactElement
    | null
    | (() => React.ReactElement | null)
    | React.ReactElement[];
}
