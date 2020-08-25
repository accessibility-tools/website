import React from 'react';
import { select, number } from '@storybook/addon-knobs';
import Badge from './Badge';
import { color } from '../../shared/style.ts';
import StoryWrapper from '../story-wrapper/StoryWrapper.tsx';
import ComingSoonBadge from './ComingSoonBadge.tsx';

export default {
  title: 'Design System|Badge',
  component: Badge
};

const reportData = {
  CRITICAL: {
    name: 'circle',
    color: color.error,
    issueCount: 3
  },
  SERIOUS: {
    name: 'issue',
    color: color.error,
    issueCount: 7
  },
  MODERATE: {
    name: 'issue',
    color: color.darkPurple,
    issueCount: 10
  },
  MINOR: {
    name: 'issue',
    color: color.primary,
    issueCount: 1
  }
};

const reportLabel = 'level';
const levels = Object.keys(reportData);
const details = Object.keys(reportData).map((key) => reportData[key]);

export const criticalBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        label={select(reportLabel, levels, levels[0])}
        issueCount={number('issueCount', details[0].issueCount, { min: 0 })}
        name={details[0].name}
        color={details[0].color}
      />
      <Badge
        label={select(reportLabel, levels, levels[0])}
        name={details[0].name}
        color={details[0].color}
      />
    </StoryWrapper>
  );
};

export const seriousBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        label={select(reportLabel, levels, levels[1])}
        issueCount={number('issueCount', details[1].issueCount, { min: 0 })}
        name={details[1].name}
        color={details[1].color}
      />
      <Badge
        label={select(reportLabel, levels, levels[1])}
        name={details[1].name}
        color={details[1].color}
      />
    </StoryWrapper>
  );
};

export const moderateBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        label={select(reportLabel, levels, levels[2])}
        issueCount={number('issueCount', details[2].issueCount, { min: 0 })}
        name={details[2].name}
        color={details[2].color}
      />
      <Badge
        label={select(reportLabel, levels, levels[2])}
        name={details[2].name}
        color={details[2].color}
      />
    </StoryWrapper>
  );
};

export const minorBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        label={select(reportLabel, levels, levels[3])}
        issueCount={number('issueCount', details[3].issueCount, { min: 0 })}
        name={details[3].name}
        color={details[3].color}
      />
      <Badge
        label={select(reportLabel, levels, levels[3])}
        name={details[3].name}
        color={details[3].color}
      />
    </StoryWrapper>
  );
};

export const comingSoonBadge = () => {
  return (
    <StoryWrapper>
      <ComingSoonBadge />
    </StoryWrapper>
  );
};
