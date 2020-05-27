import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LinkTo from "@storybook/addon-links/react";
import { color } from "../../shared/style";
import ArrowIcon from "../icon/ArrowIcon";

const PaginationWrapper = styled.nav`
  display: flex;
  align-items: center;

  span {
    padding: 0 1.5em;
  }
`;

const PageLink = styled(LinkTo)`
  &[aria-disabled="true"] {
    pointer-events: none;
  }

  &[aria-disabled="true"] > * {
    fill: ${color.disabled};
  }
`;

const Pagination = ({ currentPage, totalPages }) => (
  <PaginationWrapper>
    <PageLink
      aria-label="previous page"
      aria-disabled={currentPage === 1}
      kind="Design System|Badge"
      story="critical badge"
      title="link to badges"
    >
      <ArrowIcon aria-hidden="true" icon="bArrow" direction="left" />
    </PageLink>
    <span className="subtitle">
      PAGE {currentPage} OF {totalPages}
    </span>
    <PageLink
      aria-label="next page"
      aria-disabled={currentPage === totalPages}
      kind="Design System|Pagination"
      story="pagination disabled"
      title="link to pagination"
    >
      <ArrowIcon aria-hidden="true" icon="bArrow" direction="right" />
    </PageLink>
  </PaginationWrapper>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
