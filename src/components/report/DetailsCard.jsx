import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../../shared/style";
import Stack from "../layout-components/Stack";
import Link from "../links/Link";
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

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
`;

const DetailsCard = ({ issueData }) => {
  const [isOpened, setOpened] = useState(false);
  const handleOpen = event => {
    setOpened(event.currentTarget.open);
  };
  const { title, summary, resource, failedStandard, fixes } = issueData;
  const issueCount = fixes.forEach(fix => {
    let count = 0;
    count += fix.affectedElements.length;
    return count;
  });

  return (
    <Details onToggle={handleOpen}>
      <Summary>
        <div>
          <h3>{`${title} (${issueCount})`}</h3>
          <p>{summary}</p>
          <p>{`Failed accessibility standard: ${failedStandard}`}</p>
          <Link
            url={resource}
            text="Resource to solve this issue"
            icon="extLink"
            isExternal={true}
          />
        </div>
        <div>
          <ArrowIcon icon="bArrow" direction={!isOpened && "up"} />
        </div>
      </Summary>

      <Stack space="medium">
        <Subtitle>Which elements should be fixed?</Subtitle>
        {fixes.map((fix, index) => (
          <FixElement key={`${title} required fix ${index}`} fixData={fix} />
        ))}
      </Stack>
    </Details>
  );
};

DetailsCard.propTypes = {
  issueData: PropTypes.object,
};

export default DetailsCard;
