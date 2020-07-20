import React from 'react';
import Details from './Details.tsx';
import StoryWrapper from '../story-wrapper/StoryWrapper.tsx';

export default {
  title: 'Design System|Details',
  component: Details
};

export const details = () => (
  <StoryWrapper>
    <Details title="Details Title">
      <p>Ipsum lorem dolore sica blabla...</p>
    </Details>
  </StoryWrapper>
);
