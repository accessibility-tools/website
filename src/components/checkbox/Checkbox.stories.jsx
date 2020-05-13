import React from 'react';
import { Checkbox } from './Checkbox';
import { StoryWrapper } from '../story-wrapper/StoryWrapper';

export default {
  title: 'Design System|Checkbox',
  component: Checkbox,
};

export const checkboxSelector = () => (
  <StoryWrapper>
    <Checkbox icon label="Option 1"/>
  </StoryWrapper>
)