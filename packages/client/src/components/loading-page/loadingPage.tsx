import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Stack from '../layout-components/Stack';
import Switcher from '../layout-components/Switcher';

const BlankTitle = styled.div`
  background-color: ${color.white};
  height: 2rem;
  flex: 0 0 15%;

  &:first-child {
    flex: 0 0 50%;
    margin-right: auto;
  }
`;

const BlankCard = styled.div`
  background-color: ${color.white};
  height: 20rem;
`;

const BlankDetails = styled.div`
  background-color: ${color.white};
  height: 2rem;
  width: inherit;
`;

export const LoadingPage: React.FC = () => (
  <Stack>
    <Switcher threshold="35rem">
      <div>
        <BlankTitle />
        <BlankTitle />
        <BlankTitle />
      </div>
    </Switcher>
    <Switcher threshold="35rem">
      <div>
        <BlankCard />
        <BlankCard />
      </div>
    </Switcher>
    <Stack>
      <BlankDetails />
      <BlankDetails />
      <BlankDetails />
    </Stack>
  </Stack>
);
