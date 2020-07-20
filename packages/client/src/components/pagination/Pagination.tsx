import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import ArrowIcon from '../icon/ArrowIcon';
import { IPagination } from './types';

const PaginationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    padding: 0 1.5em;
  }
`;

const PageLink = styled.a`
  display: flex;
  &:active {
    background-color: ${color.purple};
  }
  &[aria-disabled='true'] {
    pointer-events: none;
  }
  &[aria-disabled='true'] > * > * {
    fill: ${color.disabled};
  }
`;

const Pagination: React.FC<IPagination> = ({
  currentPage,
  totalPages,
  href
}) => (
  <PaginationWrapper>
    <PageLink
      aria-label="previous page"
      aria-disabled={currentPage === 1}
      href={href + (currentPage - 1)}
      target="_self"
    >
      <ArrowIcon
        aria-hidden="true"
        icon="bArrow"
        direction="left"
        color={color.primary}
      />
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
      <ArrowIcon
        aria-hidden="true"
        icon="bArrow"
        direction="right"
        color={color.primary}
      />
    </PageLink>
  </PaginationWrapper>
);

export default Pagination;
