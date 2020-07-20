import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import MenuItem from './MenuItem';
import StoryWrapper from '../story-wrapper/StoryWrapper.tsx';

export default {
  title: 'Design System|Menu Item',
  component: MenuItem
};

export const allMenuItems = () => (
  <StoryWrapper>
    <MenuItem text="Menu Item 1" />
    <MenuItem isSelected={boolean('is selected', true)} text="Menu Item 2" />
  </StoryWrapper>
);
