import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { MenuItem } from './menuItem';

export default {
  title: 'Design System|Menu Item',
  component: MenuItem,
};

const ListItem = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;
  
  & > a {
    margin: 1rem;
  }

`

export const AllMenuItems = () => (
  <ListItem>
    <MenuItem>Menu Item</MenuItem>
    <MenuItem isSelected={true}>Menu Item</MenuItem>
  </ListItem>
)