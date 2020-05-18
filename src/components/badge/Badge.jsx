import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { typography, color, spacing } from "../../shared/style";
import Icon from "../icon/Icon";

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

const Badge = ({ level, issueCount, ...props }) => {
  const levelIcon = {
    critical: <Icon color={color.error} icon="circle" />,
    serious: <Icon color={color.error} icon="issue" />,
    moderate: <Icon color={color.darkPurple} icon="issue" />,
    minor: <Icon color={color.primary} icon="issue" />,
  };
  console.log(props);
  return (
    <BadgeWrapper {...props}>
      {levelIcon[level]}
      {issueCount} {level}
      {(issueCount || issueCount === 0) && " issues"}
    </BadgeWrapper>
  );
};

Badge.propTypes = {
  level: PropTypes.string,
  issueCount: PropTypes.number,
};

export default Badge;
