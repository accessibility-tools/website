import React from 'react';

export interface IRadioButton {
  label: string;
  name: string;
  hintText?: string;
  value: any;
  isChecked?: boolean;
  hintIcon?: string;
  iconColor?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface IStyledRadioButton extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  isChecked?: boolean;
}
