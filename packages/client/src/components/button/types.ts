import React from 'react';

export interface IStyledButton {
  isSecondary: boolean;
  icon: string;
}

export interface IButton
  extends IStyledButton,
    React.HTMLAttributes<HTMLLinkElement>,
    React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}
