import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import { IBanner, IBannerWrapper } from './types';

const BannerWrapper = styled.div<IBannerWrapper>`
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

const Banner: React.FC<IBanner> = ({ text, width }) => (
  <BannerWrapper width={width}>{text}</BannerWrapper>
);

export default Banner;
