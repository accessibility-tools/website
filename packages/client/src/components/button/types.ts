import React from 'react';

export type TButtonProps = React.ComponentPropsWithRef<'button'>;
export type TButtonLinkProps = React.ComponentPropsWithRef<'a'>;

export interface IStyledButton {
  isSecondary?: boolean;
  icon?: string;
}

export interface IButton extends TButtonProps, IStyledButton {
  text?: string;
}

export interface IButtonLink extends TButtonLinkProps, IStyledButton {
  text?: string;
}
