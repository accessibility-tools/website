import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Checkbox } from './checkbox';

export default {
  title: 'Design System|Checkbox',
  component: Checkbox,
};

export const CheckboxSelector = () => <Checkbox icon>Option 1</Checkbox>;