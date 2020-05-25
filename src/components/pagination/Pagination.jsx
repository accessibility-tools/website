import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { typography, color, spacing } from "../../shared/style";
import Icon from "../icon/Icon";

const PaginationWrapper = styled.nav`
  align-items: center;
  border: 1px solid ${color.primary};
  border-radius: ${spacing.borderRadius.medium}px;
  display: flex;
  font-weight: ${typography.weight.bold};
  justify-content: center;
  letter-spacing: 0.07rem;
  vertical-align: top;

  svg {
    margin: ${spacing.padding.small}px;
  }
`;

const Pagination = ({ pageNum, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(pageNum);
  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <PaginationWrapper>
      <button
        type="submit"
        aria-label="previous page"
        disabled={currentPage === 1}
        onClick={onPrevPage}
      >
        <Icon aria-hidden="true" icon="sArrow" arrowDirection="left" />
      </button>
      PAGE {currentPage} OF {totalPages}
      <button
        type="submit"
        aria-label="next page"
        disabled={currentPage === totalPages}
        onClick={onNextPage}
      >
        <Icon aria-hidden="true" icon="sArrow" arrowDirection="right" />
      </button>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  pageNum: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
