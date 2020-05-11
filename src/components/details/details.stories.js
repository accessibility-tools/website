import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Details } from './details';

export default {
  title: 'Design System|Details',
  component: Details,
};

const ListItem = styled.div`
  margin: 1rem;  
`

export const details = () => (
  <ListItem>
    <Details title="Details Title">
      <p>Ipsum lorem dolore sica blabla...</p>
    </Details>
  </ListItem>
)