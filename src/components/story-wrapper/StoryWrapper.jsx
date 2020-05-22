import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Layout = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;

  & > * {
    margin: 1em;
  }
`;

const StoryWrapper = ({ children }) => {
  return <Layout>{children}</Layout>;
};

StoryWrapper.propTypes = {
  children: PropTypes.any,
};

export default StoryWrapper;
