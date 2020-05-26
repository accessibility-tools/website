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
    <Pagination
      prevHref="#"
      nextHref="#"
      currentPage={1}
      totalPages={totalPages}
    />
  </StoryWrapper>
);

export const lastPage = () => (
  <StoryWrapper>
    <Pagination
      prevHref="#"
      nextHref="#"
      currentPage={totalPages}
      totalPages={totalPages}
    />
  </StoryWrapper>
);

export const otherPages = () => (
  <StoryWrapper>
    <Pagination
      prevHref="#"
      nextHref="#"
      currentPage={5}
      totalPages={totalPages}
    />
  </StoryWrapper>
);
