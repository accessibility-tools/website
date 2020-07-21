import React from 'react';
import { object } from '@storybook/addon-knobs';
import CTA from './CTA.tsx';
import StoryWrapper from '../story-wrapper/StoryWrapper.tsx';

export default {
  title: 'Design System|CTA',
  component: CTA
};

const label = 'CTA-props';

export const primary = () => {
  const ciTool = {
    text: 'Find out more on github',
    url: 'https://github.com/accessibility-tools/ci',
    isExternal: true
  };
  const data = object(label, ciTool);
  return (
    <StoryWrapper>
      <CTA {...data} />
    </StoryWrapper>
  );
};

export const secondary = () => {
  const webChecker = {
    text: 'check out the tool',
    url: '/checker',
    isSecondary: true
  };
  const data = object(label, webChecker);
  return (
    <StoryWrapper>
      <CTA {...data} />
    </StoryWrapper>
  );
};

export const primaryWithIcon = () => {
  const ciTool = {
    text: 'Find out more on github',
    url: 'https://github.com/accessibility-tools/ci',
    icon: 'extLink',
    isExternal: true
  };
  const data = object(label, ciTool);
  return (
    <StoryWrapper>
      <CTA {...data} />
    </StoryWrapper>
  );
};
export const secondaryWithIcon = () => {
  const webChecker = {
    text: 'check out the tool',
    url: 'https://github.com/accessibility-tools/website',
    icon: 'extLink',
    isExternal: true,
    isSecondary: true
  };
  const data = object(label, webChecker);
  return (
    <StoryWrapper>
      <CTA {...data} />
    </StoryWrapper>
  );
};
