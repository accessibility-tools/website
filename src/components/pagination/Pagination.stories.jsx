import React from "react";
import Pagination from "./Pagination";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|Pagination",
  component: Pagination,
};

const totalPages = 10;

export const paginationActive = () => (
  <StoryWrapper>
    <Pagination currentPage={2} totalPages={totalPages} />
  </StoryWrapper>
);

export const paginationDisabled = () => (
  <StoryWrapper>
    <Pagination currentPage={totalPages} totalPages={totalPages} />
  </StoryWrapper>
);
