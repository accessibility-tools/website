import React from 'react';
import styled from 'styled-components';

import { spacing, color } from '../../shared/style';
import Icon from '../icon/Icon';
import { ISponsor } from './types';
import {SponseredStyledLink} from '../links/Link';

const Logo = styled(Icon)`
  max-width: 100%;
  max-height: 100%;
  margin-left: ${spacing.padding.small}px;
`;

const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: baseline;
  justify-content: flex-start;
`;

const Sponsor: React.FC<ISponsor> = ({ block }) => (
  <SponseredStyledLink href="https://futurice.com/">
    <LogoWrapper>
      Sponsored by
      <span className="visually-hidden">Futurice.com</span>
      <Logo
        viewBox="0 0 100 21"
        className="Logo"
        alt="corporate logo of sponsor"
        aria-hidden="true"
        block={block}
        icon="FutuLogo"
        color={color.primary}
      />
    </LogoWrapper>
  </SponseredStyledLink>
);

export default Sponsor;
