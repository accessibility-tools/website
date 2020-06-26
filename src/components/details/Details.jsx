import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../../shared/style";
import Icon from "../icon/Icon";

export const DetailsContainer = styled.details`
  width: 100%;
  &:active {
    background-color: ${color.purple};
  }
  display: flex;
  flex-direction: column;

  & > * {
    margin: auto;
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

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    display: block;
    border-radius: 5px;
    border: 2px solid ${color.primary};
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
  }

  @media (min-width: 48rem) {
    max-width: 80%;
  }
`;

const Details = ({ children, title }) => {
  const [isOpened, setOpened] = useState(false);
  const handleOpen = event => {
    setOpened(event.currentTarget.open);
  };
  return (
    <DetailsContainer onToggle={handleOpen}>
      <StyledSummary>
        {title}
        <div>
          <Icon icon={isOpened ? "minus" : "plus"} />
        </div>
      </StyledSummary>
      {children}
    </DetailsContainer>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Details;
