import React from 'react';

export interface IRadioButton {
  label: string;
  value: string;
  isChecked?: boolean;
  handleCheckedChange?: () => void;
  className?: string;
}

export interface IStyledRadioButton extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  isChecked?: boolean;
}
