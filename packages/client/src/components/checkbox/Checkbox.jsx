import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, spacing } from '../../shared/style';
import Icon from '../icon/Icon';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  border: 3px solid ${(props) => (props.checked ? color.blue : color.primary)};
  border-radius: 3px;
  display: inline-block;
  height: 20px;
  margin-right: ${spacing.padding.small}px;
  position: relative;
  transition: all 150ms;
  width: 20px;

  svg {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    color: ${color.blue};
    position: absolute;

    &:hover {
      color: ${color.lightBlue};
    }

    &:active {
      color: ${color.darkBlue};
    }
  }

  &:hover {
    border-color: ${color.lightBlue};
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

const CheckboxContainer = styled.label`
  border: 4px solid transparent;
  border-radius: 3px;
  display: inline-flex;
  margin: ${spacing.padding.medium}px;
  vertical-align: middle;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:focus-within {
    box-shadow: 0 0 0 4px ${color.darkBlue};
  }
`;

const Checkbox = ({ checked, label, ...otherProps }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleKeyPress = (event) => {
    if (event.key === ' ') {
      setIsChecked(!isChecked);
    }
  };

  const handleCheckedChange = () => setIsChecked(!isChecked);

  return (
    <CheckboxContainer>
      <HiddenCheckbox
        onKeyPress={handleKeyPress}
        checked={checked}
        {...otherProps}
      />
      <StyledCheckbox
        checked={isChecked}
        onClick={handleCheckedChange}
        {...otherProps}
      >
        <Icon icon="checkmark" />
      </StyledCheckbox>
      <span>{label}</span>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  checked: false
};

export default Checkbox;
