import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../../shared/style";
import Stack from "../layout-components/Stack";
import Link from "../links/Link";
import Icon from "../icon/Icon";
import ArrowIcon from "../icon/ArrowIcon";
import FixElement from "./FixElement";

const Details = styled.details`
  background-color: ${color.white};
  border-radius: 6px;
  border: solid 1px ${color.lightGrey1};
  box-shadow: 0 2px 10px 0 ${color.lightGrey2};
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    max-width: 100%;
    padding: 2rem;
  }
`;

const Summary = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 3px;

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  & > div > p {
    max-width: none;
    font-weight: normal;
  }
`;

const SubTitle = styled.p`
  font-weight: bold;
`;

const FailedWrapper = styled.div`
  svg {
    margin-right: 0.5rem;
  }
`;

const DetailsCard = ({ issueDetails }) => {
  const [isOpened, setOpened] = useState(false);
  const handleOpen = event => {
    setOpened(event.currentTarget.open);
  };
  return (
    <Details onToggle={handleOpen}>
      <Summary>
        <div>
          <h3>{issueDetails.title}</h3>
          <p>{issueDetails.summary}</p>
          <Link href={issueDetails.resource} icon="extLink" isExternal={true}>
            Resource to solve this issue
          </Link>
        </div>
        <div>
          <ArrowIcon icon="bArrow" direction={!isOpened && "up"} />
        </div>
      </Summary>

      <Stack space="medium">
        <Stack space="small">
          <SubTitle>Failed accessibility standards</SubTitle>
          {issueDetails.failedStandards.map((failedStandard, index) => (
            <FailedWrapper key={`failed standard ${index}`}>
              <Icon icon="extLink" />
              <span>{failedStandard.name}</span>
            </FailedWrapper>
          ))}
          <Link href="/" icon="manicule" isExternal={true}>
            WHAT ARE ACCESSIBILITY STANDARDS?
          </Link>
        </Stack>
        <div>
          <SubTitle>Required fixes</SubTitle>
          {issueDetails.fixes.map((fix, index) => (
            <FixElement key={`required fix ${index}`} fixDetails={fix} />
          ))}
        </div>
      </Stack>
    </Details>
  );
};

DetailsCard.propTypes = {
  issueDetails: PropTypes.object,
};

export default DetailsCard;
