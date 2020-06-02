import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../../shared/style";
import ArrowIcon from "../icon/ArrowIcon";

const PaginationWrapper = styled.nav`
  display: flex;
  align-items: center;
  span {
    padding: 0 1.5em;
  }
`;

const PageLink = styled.a`
  display: flex;
  &[aria-disabled="true"] {
    pointer-events: none;
  }
  &[aria-disabled="true"] > * {
    fill: ${color.disabled};
  }
  &:active {
    background-color: ${color.purple};
  }
`;

const Pagination = ({ currentPage, totalPages, href }) => {
  return (
    <PaginationWrapper>
      <PageLink
        aria-label="previous page"
        aria-disabled={currentPage === 1}
        href={href + (currentPage - 1)}
        target="_self"
      >
        <ArrowIcon aria-hidden="true" icon="bArrow" direction="left" />
      </PageLink>

      <span className="subtitle">
        PAGE {currentPage} OF {totalPages}
      </span>
      <PageLink
        aria-label="next page"
        aria-disabled={currentPage === totalPages}
        href={href + (currentPage + 1)}
        target="_self"
      >
        <ArrowIcon aria-hidden="true" icon="bArrow" direction="right" />
      </PageLink>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
};

export default Pagination;
