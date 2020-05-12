import React from 'react';
import styled from 'styled-components';
import { Link } from './Links';

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

