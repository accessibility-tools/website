import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing, typography, background, color } from "../../shared/style";
import ArrowIcon from "../icon/ArrowIcon";

const StyledLabel = styled.div`
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

const MenuLabel = ({ open, toggleOpen }) => (
  <StyledLabel tabIndex="0" open={open} onClick={toggleOpen}>
    <p>MENU</p>
    <ArrowIcon icon="sArrow" direction="up" open={open} />
  </StyledLabel>
);

MenuLabel.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default MenuLabel;
