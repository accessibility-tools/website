import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from '../../shared/style';
import { Icon } from '../icon/Icon';


const DetailsContainer = styled.details `
  &:active {
    background-color: ${color.purple};
  }
`

const StyledSummary = styled.summary`
  border: 3px solid transparent;
  border-radius: 2px;
  padding: 16px;
  position: relative;
  display: flex;
  justify-content: space-between;

  &::-webkit-details-marker {
    display: none;
  }
  
  &:hover {
    cursor: pointer; 
  }

  &::before {
    content:"";
    display: block;
    border-radius: 5px;
    border: 2px solid ${color.primary};
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
  }
`

export const Details = ({children, title}) => {
  const [isOpened, setOpened] = React.useState(false)
  const handleOpen = (event) => {
    setOpened(event.currentTarget.open)
  }
  return (
    <DetailsContainer onToggle={handleOpen}>
      <StyledSummary>
        <h5>{title}</h5>
        <Icon icon={isOpened ? "minus" : "plus"}/>
      </StyledSummary>
      {children}
    </DetailsContainer>

  )
}

Details.propTypes = {
  title: PropTypes.string.isRequired
}