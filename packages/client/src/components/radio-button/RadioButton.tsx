import React from 'react';
import styled from 'styled-components';

import { color, spacing } from '../../shared/style';
import { IRadioButton, IStyledRadioButton } from './types';
import Icon from '../icon/Icon';

const StyledRadioButton = styled.span<IStyledRadioButton>`
  border: 3px solid ${({ isChecked }) => isChecked ? color.blue : color.primary};
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
    content: '';
    height: 8px;
    left: 3px;
    top: 3px;
    position: absolute;
    visibility: ${({ isChecked }) => isChecked ? 'visible' : 'hidden'};
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

const RadioButtonInput = styled.label`
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

const StyledSubtext = styled.div`
  padding: .2rem 0 .8rem;
  color: ${color.mediumGrey};

  & > *:first-child {
    margin-right: 0.5rem;
  }

  @media (min-width: 48rem) {
    width: 35rem;
  }
`;

const RadioButtonContainer = styled.div`
  & > div {
    margin-top: 5px;
    margin-left: 34px;
  }
`;

const RadioButton: React.FC<IRadioButton> = ({
  label,
  value,
  name,
  isChecked = false,
  onChange,
  className,
  hintText,
  hintIcon,
  iconColor
}) => (
  <RadioButtonContainer>
    <RadioButtonInput className={className}>
      <input
        name={name}
        type="radio"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <StyledRadioButton isChecked={isChecked}/>
      {label}
    </RadioButtonInput>
    {hintText && (
      <StyledSubtext id={`${value}-hint`}>
        {hintIcon && <Icon
          icon={hintIcon}
          color={iconColor}
        />}
        <span>{hintText}</span>
      </StyledSubtext>
    )}
  </RadioButtonContainer>
);

export default RadioButton;
