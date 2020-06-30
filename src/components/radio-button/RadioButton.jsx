import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color, spacing } from "../../shared/style";

const StyledRadioButton = styled.span`
  border: 3px solid ${props => (props.checked ? color.blue : color.primary)};
  border-radius: 50%;
  display: inline-block;
  height: 20px;
  margin-right: ${spacing.padding.small}px;
  position: relative;
  transition: all 150ms;
  width: 20px;

  &::after {
    border-radius: 50%;
    background-color: ${color.blue};
    content: "";
    height: 8px;
    left: 3px;
    top: 3px;
    position: absolute;
    visibility: ${props => (props.checked ? "visible" : "hidden")};
    width: 8px;
  }

  &:hover {
    border: 3px solid ${color.lightBlue};
    cursor: pointer;

    &::after {
      background-color: ${color.lightBlue};
    }
  }

  &:active {
    border-color: ${color.darkBlue};

    &::after {
      background-color: ${color.darkBlue};
    }
  }
`;

const RadioButtonContainer = styled.label`
  border: 4px solid transparent;
  border-radius: 3px;
  display: inline-flex;

  vertical-align: middle;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:focus-within {
    box-shadow: 0 0 0 4px ${color.darkBlue};
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

const RadioButton = ({ checked, label, className, ...otherProps }) => {
  const [isChecked, setChecked] = useState(checked);
  const handleCheckedChange = () => setChecked(!isChecked);

  useEffect(() => {
    document.onkeydown = e => {
      if (e.keyCode === 32) {
        setChecked(!isChecked);
      }
    };

    return () => {
      document.onkeydown = null;
    };
  });

  return (
    <RadioButtonContainer className={className}>
      <input type="radio" checked={checked}></input>
      <StyledRadioButton
        checked={isChecked}
        onClick={handleCheckedChange}
        {...otherProps}
      ></StyledRadioButton>
      {label}
    </RadioButtonContainer>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

RadioButton.defaultProps = {
  checked: false,
};

export default RadioButton;
