import React from 'react';
import styled from 'styled-components';

import { IStoryWrapper } from './types';

const Layout = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;

  & > * {
    margin: 1em;
  }
`;

const StoryWrapper: React.FC<IStoryWrapper> = ({ children }) => (
  <Layout>{children}</Layout>
);

export default StoryWrapper;
