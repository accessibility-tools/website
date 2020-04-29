import React from 'react';
import styled from 'styled-components';
import { MenuItem } from '../menu-item/menuItem';
import { Sponsor } from '../sponsor/sponsor';
import { spacing } from '../../shared/style';

const VALUES = {
  TOOLS: "the tools",
  LEARN: "learn more",
  ABOUT: "about & contact"
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledList = styled.ul`
  margin-left: ${spacing.padding.large}px;
  padding: 0;
  & > li {
    display: inline;
  }
`

export const Nav = () => {
  const [selected, setSelected] = React.useState(VALUES.TOOLS)
  return (
  <StyledNav>
    <StyledList>
    {[VALUES.TOOLS, VALUES.LEARN, VALUES.ABOUT].map(item => (
      <MenuItem 
        value={item} 
        onSelect={() => setSelected(item)} 
        isSelected={item === selected}
      >
        {item}
      </MenuItem>
    ))}
    </StyledList>
    <Sponsor/>
  </StyledNav>
  )
}