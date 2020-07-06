import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../../shared/style";
import Stack from "../layout-components/Stack";
import Badge from "../badge/Badge";
import Link from "../links/Link";
import ArrowIcon from "../icon/ArrowIcon";
import HiddenDetails from "./HiddenDetails";

const CardContainer = styled(Stack)`
  @media (max-width: 48rem) {
    width: 80vw;
  }
`;

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

const DetailsBadge = styled(Badge)`
  max-width: fit-content;
`;

const ReportDetailsCard = () => {
  const [isOpened, setOpened] = useState(false);
  const handleOpen = event => {
    setOpened(event.currentTarget.open);
  };
  return (
    <CardContainer space="medium">
      <DetailsBadge
        label="critical"
        iconName="circle"
        iconColor={color.error}
      />
      <Details onToggle={handleOpen}>
        <Summary>
          <div>
            <h3>Color contrast(11)</h3>
            <p>
              Ensure the contrast between foreground and background colors meets
              WCAG 2 AA contrast ratio thresholds.
            </p>
            <Link icon="extLink" isExternal={true}>
              Resource to solve this issue
            </Link>
          </div>
          <div>
            <ArrowIcon icon="bArrow" direction={!isOpened && "up"} />
          </div>
        </Summary>
        <HiddenDetails />
      </Details>
    </CardContainer>
  );
};

ReportDetailsCard.propTypes = {
  reportData: PropTypes.object,
};

export default ReportDetailsCard;
