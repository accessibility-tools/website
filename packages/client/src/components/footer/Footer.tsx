import React from 'react';
import styled from 'styled-components';

import { spacing } from '../../shared/style';
import Icon from '../icon/Icon';
import StyledLink from '../links/Link';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.padding.medium}px;
`;

const LicenseWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  span {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const LicenseLink = styled(StyledLink)`
  display: inline-flex;
  align-items: center;
  & > :first-child {
    margin-right: 4px;
  }
  & > :last-child {
    margin-right: ${spacing.padding.small}px;
  }
`;

const FullText = styled.span`
  display: none;
  @media (min-width: 48rem) {
    display: inline-flex;
  }
`;

const ShortText = styled.span`
  display: inline-flex;
  @media (min-width: 48rem) {
    display: none;
  }
`;
const Space = styled.div`
  display:inline-block;
  width:5px;
`;

const IconAlignment = styled.div`
  position: relative;
  display: inline-block;
  top: 3px;
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <LicenseWrapper>
      <LicenseLink
        url="https://github.com/accessibility-tools/website/blob/master/License"
        isSecondary={true}
        aria-label="license information about the tool"
      >
        <IconAlignment>
        <Icon icon="creativeCommon1" />
        <Space/>
        <Icon icon="creativeCommon2" />
        </IconAlignment>
      </LicenseLink>
      <FullText>Copyright © 2020 Accessibility Tools</FullText>
      <ShortText>© 2020 Accessibility Tools</ShortText>
    </LicenseWrapper>
    <StyledLink url="/imprint" text="imprint" isSecondary={true} />
  </StyledFooter>
);

export default Footer;
