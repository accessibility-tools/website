import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { background, color, spacing } from '../../shared/style';
import {Icon} from '../icon/icon';

// SECOND METHOD - WIP

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  border: 3px solid ${props => props.checked ? color.blue : color.primary};
  border-radius: 3px;
  display: inline-block;
  height: 20px;
  margin-right: ${spacing.padding.small}px;
  position: relative;
  transition: all 150ms;
  width: 20px;

  svg {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
    color: ${color.blue};
    position: absolute;

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

const CheckboxContainer = styled.label`
  display: inline-flex;
  margin: ${spacing.padding.medium}px;
  vertical-align: middle;

  &:focus-within {
    outline: ${color.darkBlue} solid 4px;
    outline-offset: 3px;
  }
`


export const Checkbox = ({className, checked, children, ...props }) => {
  const [isChecked, setChecked] = React.useState(props.checked)
  const handleKeyPress = (event) => {
    if (event.key === " ") {
      setChecked(!isChecked)
    }
  }
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox
        onKeyPress={handleKeyPress}
        checked={checked}
        {...props}
      />
      <StyledCheckbox
        checked={isChecked}
        onClick={event => setChecked(!isChecked)}
        {...props}
      >
        <Icon icon="checkmark"/>
      </StyledCheckbox>
      <span>
        {children}
      </span> 
    </CheckboxContainer>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool
}


Checkbox.defaultProps = {
  checked: false
}



// export const CheckboxContainer = () => {
//   const [checked, setChecked] = React.useState(false)
//   const handleCheckboxChange = event => {
//     setChecked(event.target.checked)
//   }
//   return (
//     <div>
//       <label>
//         <Checkbox
//           checked={checked}
//           onChange={handleCheckboxChange}
//         />
//         <span>Label Text</span>
//       </label>
//     </div>    
//   ) 
// }

