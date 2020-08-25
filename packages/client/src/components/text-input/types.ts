import React from 'react';

export interface IStyledSubtext {
  isError?: boolean;
}

export interface IStyledInput {
  error?: string;
  isValid?: boolean;
}

export interface ITextInput {
  type: string;
  id: string;
  label: string;
  isValid?: boolean;
  disabled?: boolean;
  placeholder?: string;
  errorText?: string;
  hintText?: string;
  hintIcon?: string;
  iconColor?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
