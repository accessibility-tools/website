import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Badge } from './badge';

export default {
  title: 'Design System|Badge',
  component: Badge,
};

const LEVELS = {
  CRITICAL: 'critical',
  SERIOUS: 'serious',
  MODERATE: 'moderate',
  MINOR: 'minor',
};

const ListItem = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;
  
  & > div {
    margin: 1rem;
  }

`

export const allBadges = () => (
  <ListItem> 
    <Badge level={LEVELS.CRITICAL}/>
    <Badge level={LEVELS.SERIOUS}/>
    <Badge level={LEVELS.MODERATE}/>
    <Badge level={LEVELS.MINOR}/>
  </ListItem>
)