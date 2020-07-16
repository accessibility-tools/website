import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../../../front/src/shared/global';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';


addDecorator(withA11y);
addDecorator(withKnobs);

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
