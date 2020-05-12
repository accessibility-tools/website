import React from 'react';
import styled from 'styled-components';
import { Details } from './Details';

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