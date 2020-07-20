import React from 'react';

export interface IStoryWrapper {
  children?:
    | React.ReactElement
    | null
    | (() => React.ReactElement | null)
    | React.ReactElement[];
}
