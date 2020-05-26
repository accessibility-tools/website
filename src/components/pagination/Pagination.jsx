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

const Pagination = ({
  href,
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}) => (
  <PaginationWrapper>
    <a href={href} aria-label="previous page">
      <Icon
        aria-hidden="true"
        icon="sArrow"
        arrowDirection="left"
        disabled={currentPage === 1}
        onClick={onPrevPage}
      />
    </a>
    <span className="subtitle">
      PAGE {currentPage} OF {totalPages}
    </span>
    <a href={href} aria-label="next page">
      <Icon
        aria-hidden="true"
        icon="sArrow"
        arrowDirection="right"
        disabled={currentPage === totalPages}
        onClick={onNextPage}
      />
    </a>
  </PaginationWrapper>
);

Pagination.propTypes = {
  href: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
};

export default Pagination;
