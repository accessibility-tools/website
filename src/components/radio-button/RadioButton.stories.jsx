import React from 'react';
import { RadioButton } from './RadioButton';
import { StoryWrapper } from '../story-wrapper/StoryWrapper';

export default {
  title: 'Design System|RadioButton',
  component: RadioButton,
};

export const radioButtonSelector = () => (
  <StoryWrapper>
    <RadioButton label="Option 1"/>
  </StoryWrapper>
)