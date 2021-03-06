import React, { useState } from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Icon from '../icon/Icon';
import { IDetails } from './types';

export const DetailsContainer = styled.details`
  display: flex;
  flex-direction: column;



  width: 100%;
  &:active {
    background-color: ${color.purple};
  }
  & > * {

    max-width: 100%;
    padding: 1rem;
  }

  &:focus-within{
    box-shadow: 0 0 0 3px ${color.white}, 0 0 0 7px ${color.darkBlue};
    border-radius: 2px;
  }

  @media (max-width: 48rem) {
    & > * {
      text-align: left;
      max-width: 100%;
    }
  }
`;

const StyledSummary = styled.summary`
  border: 3px solid transparent;
  border-radius: 2px;
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }



  &::before {
    content: '';
    display: block;
    border-radius: 5px;
    border: 2px solid ${color.primary};
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
  }
`;


const Details: React.FC<IDetails> = ({ children, title }) => {
  const [isOpened, setOpened] = useState(false);

  const handleOpen = (e: React.BaseSyntheticEvent): void => {
    setOpened(e.currentTarget.open);
  };

  return (
    <DetailsContainer onToggle={handleOpen}>
      <StyledSummary>
        {title}
        <div>
          <Icon icon={isOpened ? 'minus' : 'plus'} />
        </div>
      </StyledSummary>
      {children}
    </DetailsContainer>
  );
};

export default Details;
