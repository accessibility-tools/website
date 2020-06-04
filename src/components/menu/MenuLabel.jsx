import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing, typography, color } from "../../shared/style";
import ArrowIcon from "../icon/ArrowIcon";

const StyledLabel = styled.div`
  display: none;
  p {
    padding: ${spacing.padding.small}px;
    font-weight: ${typography.weight.medium};
    letter-spacing: 0.07rem;
  }
  @media (max-width: 48rem) {
    display: flex;
    position: fixed;
    &:active {
      background-color: ${color.purple};
    }
  }
`;

const MenuIcon = styled(ArrowIcon)`
  transform: rotate(180deg);
`;

const MenuLabel = ({ open, toggleOpen }) => (
  <StyledLabel open={open} onClick={toggleOpen}>
    <p>MENU</p>
    <MenuIcon icon="bArrow" direction="up" />
  </StyledLabel>
);

MenuLabel.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default MenuLabel;
