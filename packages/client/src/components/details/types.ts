import React from 'react';

export interface IDetails {
  title: string;
  children?: React.ReactElement | null | (() => React.ReactElement | null);
}
