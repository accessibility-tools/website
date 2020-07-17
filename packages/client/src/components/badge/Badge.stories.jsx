import React from 'react';
import { select, number } from '@storybook/addon-knobs';
import Badge from './Badge';
import { color } from '../../shared/style';
import StoryWrapper from '../story-wrapper/StoryWrapper';
import ComingSoonBadge from './ComingSoonBadge';

export default {
  title: 'Design System|Badge',
  component: Badge
};

const reportData = {
  CRITICAL: {
    iconName: 'circle',
    iconColor: color.error,
    issueCount: 3
  },
  SERIOUS: {
    iconName: 'issue',
    iconColor: color.error,
    issueCount: 7
  },
  MODERATE: {
    iconName: 'issue',
    iconColor: color.darkPurple,
    issueCount: 10
  },
  MINOR: {
    iconName: 'issue',
    iconColor: color.primary,
    issueCount: 1
  }
};

const reportLabel = 'level';
const levels = Object.keys(reportData);
const details = Object.keys(reportData).map(key => reportData[key]);

export const criticalBadge = () => {
  return (
    <StoryWrapper>
      <Badge
        label={select(reportLabel, levels, levels[0])}
        issueCount={number('issueCount', details[0].issueCount, { min: 0 })}
        iconName={details[0].iconName}
        iconColor={details[0].iconColor}
      />
      <Badge
        label={select(reportLabel, levels, levels[0])}
        iconName={details[0].iconName}
        iconColor={details[0].iconColor}
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
        iconName={details[1].iconName}
        iconColor={details[1].iconColor}
      />
      <Badge
        label={select(reportLabel, levels, levels[1])}
        iconName={details[1].iconName}
        iconColor={details[1].iconColor}
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
        iconName={details[2].iconName}
        iconColor={details[2].iconColor}
      />
      <Badge
        label={select(reportLabel, levels, levels[2])}
        iconName={details[2].iconName}
        iconColor={details[2].iconColor}
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
        iconName={details[3].iconName}
        iconColor={details[3].iconColor}
      />
      <Badge
        label={select(reportLabel, levels, levels[3])}
        iconName={details[3].iconName}
        iconColor={details[3].iconColor}
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
