import React from 'react';
import { MenuItem } from './MenuItem';
import { StoryWrapper } from '../story-wrapper/StoryWrapper';

export default {
  title: 'Design System|Menu Item',
  component: MenuItem,
};

export const allMenuItems = () => (
  <StoryWrapper>
    <MenuItem text="Menu Item"/>
    <MenuItem isSelected={true} text="Menu Item"/>
  </StoryWrapper>
)