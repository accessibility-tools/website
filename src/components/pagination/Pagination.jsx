import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../../shared/style";
import Icon from "../icon/Icon";

const PaginationWrapper = styled.nav`
  display: flex;
  align-items: center;
  box-shadow: 0.1em 0.1em 0.2em ${color.disabled};

  span {
    padding: 0 1.5em;
  }
`;

const Pagination = ({ prevHref, nextHref, currentPage, totalPages }) => (
  <PaginationWrapper>
    <a href={prevHref} aria-label="previous page">
      <Icon
        aria-hidden="true"
        icon="sArrow"
        arrowDirection="left"
        disabled={currentPage === 1}
      />
    </a>
    <span className="subtitle">
      PAGE {currentPage} OF {totalPages}
    </span>
    <a href={nextHref} aria-label="next page">
      <Icon
        aria-hidden="true"
        icon="sArrow"
        arrowDirection="right"
        disabled={currentPage === totalPages}
      />
    </a>
  </PaginationWrapper>
);

Pagination.propTypes = {
  prevHref: PropTypes.string.isRequired,
  nextHref: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
