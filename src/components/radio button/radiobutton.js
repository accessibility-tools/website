import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, spacing } from '../../shared/style';

const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledRadioButton = styled.div`
  border: 3px solid ${props => props.checked ? color.blue : color.primary};
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
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
    width: 8px;

    &:hover {
      background-color: ${color.lightBlue};
    }
  
    &:active {
      background-color: ${color.darkBlue};
    }
  }

  &:hover {
    border-color: ${color.lightBlue};
  }

  &:active {
    border-color: ${color.darkBlue};
  }
` 

const RadioButtonContainer = styled.label`
  display: inline-flex;
  margin: ${spacing.padding.medium}px;
  vertical-align: middle;

  &:focus-within {
    outline: ${color.darkBlue} solid 4px;
    outline-offset: 3px;
  }
`


export const RadioButton = ({className, checked, children, ...props }) => {
  const [isChecked, setChecked] = React.useState(props.checked)
  const handleKeyPress = (event) => {
    if (event.key === " ") {
      setChecked(!isChecked)
    }
  }
  return (
    <RadioButtonContainer className={className}>
      <HiddenRadioButton
        onKeyPress={handleKeyPress}
        checked={checked}
        {...props}
      />
      <StyledRadioButton
        checked={isChecked}
        onClick={event => setChecked(!isChecked)}
        {...props}
      >
      </StyledRadioButton>
      <span>
        {children}
      </span> 
    </RadioButtonContainer>
  )
}

RadioButton.propTypes = {
  checked: PropTypes.bool
}


RadioButton.defaultProps = {
  checked: false
}

