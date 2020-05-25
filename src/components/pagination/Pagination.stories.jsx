import React, { useState } from "react";
import Pagination from "./Pagination";
import StoryWrapper from "../story-wrapper/StoryWrapper";

export default {
  title: "Design System|Pagination",
  component: Pagination,
};

const totalPages = 10;

export const firstPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <StoryWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    </StoryWrapper>
  );
};

export const lastPage = () => {
  const [currentPage, setCurrentPage] = useState(totalPages);
  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <StoryWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    </StoryWrapper>
  );
};

export const otherPages = () => {
  const [currentPage, setCurrentPage] = useState(5);
  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <StoryWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    </StoryWrapper>
  );
};
