import React from 'react';
import Checkbox from './Checkbox.tsx';
import StoryWrapper from '../story-wrapper/StoryWrapper.tsx';

export default {
  title: 'Design System|Checkbox',
  component: Checkbox
};

export const checkboxSelector = () => (
  <StoryWrapper>
    <Checkbox icon label="Option 1" />
  </StoryWrapper>
);
