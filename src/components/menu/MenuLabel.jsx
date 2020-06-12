import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing, typography, color } from "../../shared/style";
import ArrowIcon from "../icon/ArrowIcon";

const StyledLabel = styled.div`
  display: none;

  @media (max-width: 48rem) {
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    &:active {
      background-color: ${color.purple};
    }
    &:focus {
      border: 4px solid ${color.darkBlue};
    }
    p {
      padding: ${spacing.padding.small}px;
      font-weight: ${typography.weight.medium};
      letter-spacing: 0.07rem;
    }
  }
`;

const MenuIcon = styled(ArrowIcon)`
  transform: rotate(180deg);
`;

const MenuLabel = ({ open, toggleOpen }) => (
  <StyledLabel tabIndex="0" open={open} onClick={toggleOpen}>
    <p>MENU</p>
    <MenuIcon iconPath="bArrow" direction="up" />
  </StyledLabel>
);

MenuLabel.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default MenuLabel;
