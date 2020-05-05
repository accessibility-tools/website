import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Link } from './links.js';

export default {
  title: 'Design System|Link',
  component: Link,
};

const ListItem = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;
  
  & > a {
    margin: 1rem;
  }

`

export const AllLinks = () => (
  <ListItem>
    <Link href="#">Hello Link</Link>
    <Link href="#" isSecondary={true}>Hello Link</Link>
    <Link href="#" isSecondary={true} icon="extLink">Hello Link</Link>
    <Link href="#" isExternal={true} icon="extLink">Hello Link</Link>
  </ListItem>
)

