import React from 'react';
import ToolOverview from './ToolOverview';
import StoryWrapper from '../story-wrapper/StoryWrapper.tsx';
import Center from '../layout-components/Center.tsx';

export default {
  title: 'Design System|ToolOverview',
  component: ToolOverview
};

const toolData = {
  id: 'ciTool',
  title: 'Accessibility checker for websites',
  img: '/illustrations/citool-placeholder.png',
  desc: 'Run our tool in the terminal to create a report for any website:',
  details: [],
  ctaData: {},
  linkData: {}
};

export const webCheckerInfo = () => (
  <StoryWrapper>
    <Center>
      <ToolOverview toolData={toolData} />
    </Center>
  </StoryWrapper>
);
