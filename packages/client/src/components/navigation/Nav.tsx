import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import MenuLabel from '../menu/MenuLabel';
import MenuList from '../menu/MenuList';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  & > * {
    background-color: ${color.white};
    align-items: center;
  }

  a {
    &:focus {
      border: 4px solid ${color.darkBlue};
      transition: border 0.3s ease-in-out;
    }
  }
`;

const Nav: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggleExpanded = (): void => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    document.onkeydown = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        const target = e.target as HTMLElement;

        target.classList.add(
          target.getAttribute('data-type') === 'cta-btn'
            ? 'key-press-prim'
            : 'key-press'
        );
      }
    };

    document.onkeyup = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        const target = e.target as HTMLElement;

        target.classList.remove('key-press');
        target.classList.remove('key-press-prim');
      }
    };

    return () => {
      document.onkeydown = null;
      document.onkeyup = null;
    };
  }, []);

  return (
    <NavContainer aria-label="main navigation">
      <MenuLabel isExpanded={expanded} toggleExpanded={toggleExpanded} />
      <MenuList isExpanded={expanded} toggleExpanded={toggleExpanded} />
    </NavContainer>
  );
};

export default Nav;
