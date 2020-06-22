import React from "react";
import Pagination from "./Pagination";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|Pagination",
  component: Pagination,
};

const totalPages = 10;
const urlParams = new URLSearchParams(document.location.search);
const page = parseInt(urlParams.get("page") || 1);
urlParams.delete("page");
const href = `${window.location.pathname}?${urlParams.toString()}&page=`;

export const paginationActive = () => (
  <StoryWrapper>
    <Pagination currentPage={page} totalPages={totalPages} href={href} />
  </StoryWrapper>
);

export const paginationDisabled = () => (
  <StoryWrapper>
    <Pagination currentPage={totalPages} totalPages={totalPages} href={href} />
  </StoryWrapper>
);
