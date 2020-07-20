import React, { useState } from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import MenuItem from './MenuItem';
import Sponsor from '../sponsor/Sponsor';
import { IMenuData, IMenuDataItem, IMenuList } from './types';

const menuData: IMenuData = {
  TOOLS: { title: 'the tools', href: '/#tools' },
  LEARN: { title: 'learn more', href: '/#learn-more' },
  ABOUT: { title: 'about & contact', href: '/#about' }
};

const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0 1.5rem;
  display: flex;
  & > :last-child {
    margin-left: auto;
  }

  @media (max-width: 48rem) {
    flex-flow: column nowrap;
    border-top: 2px solid ${color.primary};
    position: fixed;
    top: 4.5rem;
    bottom: 0;
    padding: 0;

    ${({ isExpanded }: { isExpanded: boolean }): string | void =>
      isExpanded
        ? `& {
          opacity: 1;
          transition: opacity 200ms 0ms;
        }`
        : `& { 
          opacity: 0;
          transition: opacity 200ms 0ms;
        }`};

    & > li {
      display: inline;
      text-align: center;
      width: 100%;
      ::after {
        border: none;
      }
    }

    & > :last-child {
      margin-top: auto;
    }
  }
`;

const MenuList: React.FC<IMenuList> = ({ isExpanded, toggleExpanded }) => {
  const [selected, setSelected] = useState(menuData.TOOLS.title);

  const handleSelectMenuItem = (value: string): void => {
    setSelected(value);
    toggleExpanded();
  };

  return (
    <StyledList aria-label="menu list" id="menu-list" isExpanded={isExpanded}>
      {Object.values(menuData).map((item: IMenuDataItem) => (
        <MenuItem
          key={'menu-' + item.title}
          href={item.href}
          text={item.title}
          isSelected={item.title === selected}
          onClick={(): void => handleSelectMenuItem(item.title)}
        />
      ))}
      <li>
        <Sponsor />
      </li>
    </StyledList>
  );
};

export default MenuList;
