import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../../shared/style";
import PageArrow from "../icon/PageArrow";

const PaginationWrapper = styled.nav`
  display: flex;
  align-items: center;

  span {
    padding: 0 1.5em;
  }
`;

const PageLink = styled.a`
  ${({ "aria-disabled": ariaDisabled }) =>
    ariaDisabled &&
    `
  pointer-events: none;
  & > * {
    fill: ${color.disabled};
  }
  `}
`;

const Pagination = ({ prevHref, nextHref, currentPage, totalPages }) => (
  <PaginationWrapper>
    <PageLink
      aria-label="previous page"
      aria-disabled={currentPage === 1}
      href={prevHref}
    >
      <PageArrow aria-hidden="true" icon="bArrow" direction="left" />
    </PageLink>
    <span className="subtitle">
      PAGE {currentPage} OF {totalPages}
    </span>
    <PageLink
      aria-label="next page"
      aria-disabled={currentPage === totalPages}
      href={nextHref}
    >
      <PageArrow aria-hidden="true" icon="bArrow" direction="right" />
    </PageLink>
  </PaginationWrapper>
);

Pagination.propTypes = {
  prevHref: PropTypes.string.isRequired,
  nextHref: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
