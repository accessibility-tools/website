import React from 'react';
import styled from 'styled-components';
import {Icon} from '../icon/icon';
import { spacing } from '../../shared/style';
import { Link } from '../links/links';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.padding.medium}px;
`
const StyledLink = styled(Link)`
  display: inline-flex;
  align-item: baseline;
  & > :first-child {
    margin-right: 4px;
  }
  & > :last-child {
    margin-right: ${spacing.padding.small}px;
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink isSecondary={true}>
        <Icon className="icon" icon="creativeCommon1"/>
        <Icon className="icon" icon="creativeCommon2"/>
        Licence name
      </StyledLink>
      <Link isSecondary={true}>imprint</Link>
    </StyledFooter>
  )
}
