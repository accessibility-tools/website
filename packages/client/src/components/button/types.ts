import React from 'react';

export interface IStyledButton {
  isSecondary?: boolean;
  icon?: string;
}

export interface IButton extends IStyledButton, React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export interface IButtonLink extends IStyledButton, React.HTMLAttributes<HTMLLinkElement> {
  text?: string;
}
