import React from 'react';
import styled from 'styled-components';
import { color } from '../shared/style.ts';
import Switcher from '../components/layout-components/Switcher.tsx';
import Stack from '../components/layout-components/Stack.tsx';
import Center from '../components/layout-components/Center.tsx';

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

const SignupPage = () => (
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
          src="/illustrations/signup-img.png"
          alt="illustration for signup page"
        ></SignupImg>
      </Center>
    </div>
  </PageContainer>
);

export default SignupPage;
