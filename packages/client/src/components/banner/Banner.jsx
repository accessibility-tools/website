import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from '../../shared/style';

const BannerWrapper = styled.div`
  display: flex;
  height: auto;
  width: auto;
  padding: 0.5rem;
  border-radius: 4px;
  border: solid 1px ${color.primary};
  background-color: ${color.extraLightPurple};
  color: ${color.primary};
  align-self: flex-start;

  @media (min-width: 60rem) {
    width: ${({ width }) => (width ? width : 'auto')};
  }
`;

const Banner = ({ text, width }) => {
  return <BannerWrapper width={width}>{text}</BannerWrapper>;
};

Banner.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string
};

export default Banner;
