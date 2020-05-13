import React from 'react';
import { Link } from './Links';
import { StoryWrapper } from '../story-wrapper/StoryWrapper';

export default {
  title: 'Design System|Link',
  component: Link,
};

export const allLinks = () => (
  <StoryWrapper>
    <Link href="#">Hello Link</Link>
    <Link href="#" isSecondary={true}>Hello Link</Link>
    <Link href="#" isSecondary={true} icon="extLink">Hello Link</Link>
    <Link href="#" isExternal={true} icon="extLink">Hello Link</Link>
  </StoryWrapper>
)

