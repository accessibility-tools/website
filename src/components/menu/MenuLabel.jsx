import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing, typography, background, color } from "../../shared/style";
import ArrowIcon from "../icon/ArrowIcon";

const MenuButton = styled.button`
  display: none;
  border: 4px solid transparent;

  @media (max-width: 48rem) {
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    &:hover {
      background-color: ${background.lightPurple};
    }
    &:focus {
      border: 4px solid ${color.darkBlue};
    }
    &:active {
      background-color: ${color.lightPurple};
    }
    p {
      padding: ${spacing.padding.small}px;
      font-weight: ${typography.weight.medium};
      letter-spacing: 0.07rem;
    }
  }
`;

const MenuLabel = ({ expanded, toggleExpanded }) => (
  <MenuButton
    aria-expanded={expanded}
    aria-controls="menu-list"
    onClick={toggleExpanded}
  >
    <p>MENU</p>
    <ArrowIcon icon="sArrow" direction="up" expanded={expanded} />
  </MenuButton>
);

MenuLabel.propTypes = {
  expanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
};

export default MenuLabel;
