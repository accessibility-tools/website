import React from 'react';
import styled from 'styled-components';

import { color } from '../shared/style';
import Switcher from '../components/layout-components/Switcher';
import Stack from '../components/layout-components/Stack';
import Center from '../components/layout-components/Center';

const PageContainer = styled(Switcher)`
  background-color: ${color.extraLightPurple};
  height: 100vh;

  & > div {
    padding: 6rem 10rem;
  }

  & > div > div {
    text-align: left;
  }
`;

const SignupImg = styled.img`
  width: 50%;
  transform: scaleX(-1);

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

const SignupPage: React.FC = () => (
  <PageContainer threshold="40rem" space="0">
    <div>
      <Center>
        <Stack>
          <h2>You are signed up!</h2>
          <p>Thank you for your interest in our tools and web accessibility!</p>
        </Stack>
      </Center>
      <Center>
        <SignupImg
          src="/illustrations/webTool.svg"
          alt="illustration for signup page"
        ></SignupImg>
      </Center>
    </div>
  </PageContainer>
);

export default SignupPage;
