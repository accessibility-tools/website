import React from 'react';
import styled from 'styled-components';

import { typography, color, spacing } from '../../shared/style';
import Icon from '../icon/Icon';
import { IBadge } from './types';

const BadgeWrapper = styled.div`
  align-items: center;
  border: 1px solid ${color.primary};
  border-radius: ${spacing.borderRadius.medium}px;
  display: flex;
  font-weight: ${typography.weight.bold};
  justify-content: center;
  letter-spacing: 0.07rem;
  padding: 4px ${spacing.padding.small}px;
  text-transform: uppercase;
  vertical-align: top;

  svg {
    margin-right: ${spacing.padding.small}px;
  }
`;

const Badge: React.FC<IBadge> = ({
  label,
  issueCount,
  name,
  color,
  className
}) => (
  <BadgeWrapper className={className}>
    {name && <Icon icon={name} color={color} />}
    {issueCount && issueCount} {label}
    {(issueCount || issueCount === 0) && ' issues'}
  </BadgeWrapper>
);

export default Badge;
