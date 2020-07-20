import React from 'react';

export interface ICTA extends React.HTMLProps<HTMLLinkElement> {
  text?: string;
  icon?: string;
  url?: string;
  isExternal?: boolean;
  isSecondary?: boolean;
}
