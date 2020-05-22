import React from "react";
import Pagination from "./Pagination";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|Pagination",
  component: Pagination,
};

const totalPages = 10;

export const firstPage = () => (
  <StoryWrapper>
    <Pagination pageNum={1} totalPages={totalPages} />
  </StoryWrapper>
);

export const lastPage = () => (
  <StoryWrapper>
    <Pagination pageNum={totalPages} totalPages={totalPages} />
  </StoryWrapper>
);

export const otherPages = () => (
  <StoryWrapper>
    <Pagination pageNum={5} totalPages={totalPages} />
  </StoryWrapper>
);
