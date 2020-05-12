import React from 'react';
import styled from 'styled-components';
import { MenuItem } from './MenuItem';

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
    <MenuItem text="Menu Item"/>
    <MenuItem isSelected={true} text="Menu Item"/>
  </ListItem>
)