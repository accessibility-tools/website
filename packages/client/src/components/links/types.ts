import React from 'react';

export interface ILink extends React.HTMLProps<HTMLLinkElement> {
  text?: string;
  icon?: string;
  url?: string;
  isExternal?: boolean;
  isSecondary?: boolean;
  children?:
    | React.ReactElement
    | null
    | (() => React.ReactElement | null)
    | React.ReactElement[];
}