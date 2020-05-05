import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { RadioButton } from './radiobutton';

export default {
  title: 'Design System|RadioButton',
  component: RadioButton,
};

export const RadioButtonSelector = () => <RadioButton>Option 1</RadioButton>;