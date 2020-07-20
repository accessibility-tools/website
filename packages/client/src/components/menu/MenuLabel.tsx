import React from 'react';
import styled from 'styled-components';

import { spacing, typography, background, color } from '../../shared/style';
import ArrowIcon from '../icon/ArrowIcon';
import { IMenuLabel } from './types';

const MenuButton = styled.button`
  display: none;
  border: 4px solid transparent;

  @media (max-width: 48rem) {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: none;
    position: fixed;
    &:hover {
      background-color: ${background.lightPurple};
    }
    &:focus {
      border: 4px solid ${color.darkBlue};
    }
    &:active {
      background-color: ${color.lightPurple};
    }
    p {
      padding: ${spacing.padding.small}px;
      font-weight: ${typography.weight.medium};
      letter-spacing: 0.07rem;
    }
  }
`;

const MenuLabel: React.FC<IMenuLabel> = ({ isExpanded, toggleExpanded }) => (
  <MenuButton
    aria-expanded={isExpanded}
    aria-controls="menu-list"
    onClick={toggleExpanded}
  >
    <p>MENU</p>
    <ArrowIcon icon="sArrow" direction="up" isExpanded={isExpanded} />
  </MenuButton>
);

export default MenuLabel;
