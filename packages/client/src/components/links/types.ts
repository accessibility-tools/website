import React from 'react';

export type TLinkProps = React.ComponentPropsWithRef<'a'>;

export interface ILink extends TLinkProps {
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

export interface IStyledLink {
  icon?: string;
  isSecondary?: boolean;
}
