import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Button } from './button';

export default {
  title: 'Design System|Button',
  component: Button,
};

const ListItem = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;
  
  & > button {
    margin: 1rem;
  }

`

export const allButtons = () => (
  <ListItem>
    <Button>Hello Button</Button><br></br>
    <Button disabled={true}>Hello Button</Button><br></br>
    <Button isSecondary={true}>Hello Button</Button><br></br>
    <Button isSecondary={true} disabled={true}>Hello Button</Button><br></br>
    <Button icon="github">Hello Button</Button>
    <Button isSecondary={true} icon="github">Hello Button</Button>
  </ListItem>
)

export const Primary = () => <Button isSecondary={false}>Hello Button</Button>;
export const Secondary = () => <Button isSecondary={true}>Hello Button</Button>;
export const Disabled = () => (
  <ListItem>
    <Button disabled={true}>Hello Button</Button><br></br>
    <Button isSecondary={true} disabled={true}>Hello Button</Button>
  </ListItem>
)

export const withIcon = () => (
  <ListItem>
    <Button icon="github">Hello Button</Button>
    <Button isSecondary={true} icon="github">Hello Button</Button>
  </ListItem>
); 