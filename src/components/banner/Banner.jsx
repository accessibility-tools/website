import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../../shared/style";

const BannerWrapper = styled.div`
  height: 40px;
  width: max-content;
  padding: 0.5rem;
  border-radius: 4px;
  border: solid 1px ${color.primary};
  background-color: ${color.extraLightPurple};
  color: ${color.primary};
  align-self: flex-start;
`;

const Banner = ({ text }) => {
  return <BannerWrapper>{text}</BannerWrapper>;
};

Banner.propTypes = {
  text: PropTypes.string,
};

export default Banner;
