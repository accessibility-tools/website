import React from 'react';
import styled from 'styled-components';
import { typography, color, spacing } from '../../shared/style';
import { Icon } from '../icon/Icon';

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
`
export function Badge({ ...props }) {
  const levelIcon = {
    critical: <Icon color={color.error} icon="circle"/>,
    serious: <Icon color={color.error} icon="issue"/>,
    moderate: <Icon color={color.darkPurple} icon="issue"/>,
    minor: <Icon color={color.primary} icon="issue"/>,
  }
  return <BadgeWrapper {...props}>
    {levelIcon[props.level]}
    {props.level}{" issues"}
  </BadgeWrapper>;
}
