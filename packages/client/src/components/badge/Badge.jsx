import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { typography, color, spacing } from '../../shared/style';
import Icon from '../icon/Icon';

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

const Badge = ({ label, issueCount, iconName, iconColor, ...props }) => (
  <BadgeWrapper {...props}>
    {iconName && <Icon icon={iconName} color={iconColor} />}
    {issueCount && issueCount} {label}
    {(issueCount || issueCount === 0) && ' issues'}
  </BadgeWrapper>
);

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  issueCount: PropTypes.number,
  iconName: PropTypes.string,
  iconColor: PropTypes.string
};

export default Badge;
