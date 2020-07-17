import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { spacing, color } from '../../shared/style';
import Icon from '../icon/Icon';

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

const Sponsor = ({ block }) => (
  <LogoWrapper>
    <p>Sponsored by</p>
    <a href="https://futurice.com/">
      <span className="visually-hidden">Futurice.com</span>
      <Logo
        viewBox="0 0 100 21"
        className="Logo"
        alt="corporate logo of sponsor"
        aria-hidden="true"
        block={block}
        icon="FutuLogo"
        color={color.primary}
      ></Logo>
    </a>
  </LogoWrapper>
);

Sponsor.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string
};

export default Sponsor;
