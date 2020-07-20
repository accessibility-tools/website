import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { color } from '../shared/style.ts';
import Switcher from '../components/layout-components/Switcher.tsx';
import Stack from '../components/layout-components/Stack.tsx';
import Center from '../components/layout-components/Center.tsx';
import TextInput from '../components/text-input/TextInput.tsx';
import Button from '../components/button/Button.tsx';
import ToolOverview from '../components/tool-overview/ToolOverview.tsx';
import { webCheckerAlt } from '../constants/toolData.ts';

const PageContainer = styled(Stack)`
  background-color: ${color.white};
`;

const Section = styled.section`
  padding: 6rem 3rem;

  &:first-child {
    background-color: ${color.extraLightPurple};
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 4rem), 0% 100%);
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 4rem), 0% 100%);
  }

  h5 {
    letter-spacing: 0.07rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    margin-right: auto;
  }

  @media (min-width: 43rem) {
    padding: 8rem;
  }
`;

const IntroWrapper = styled(Switcher)`
  & > * {
    margin-bottom: 3rem;
  }

  & > * > * :first-child {
    flex-grow: 2;
  }

  p {
    text-align: center;
    font-weight: 500;
    letter-spacing: 2.25px;
  }

  @media (min-width: 43rem) {
    h1,
    p {
      text-align: left;
      margin-right: auto;
    }
  }
`;

const IntroImg = styled.img`
  width: 80%;
  transform: scaleX(-1);
`;

const WebCheckerPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { pathname } = Router;
    if (pathname === '/checker') {
      Router.push('/report');
    }
  };
  return (
    <PageContainer>
      <Section>
        <IntroWrapper threshold="40rem">
          <div>
            <Center>
              <p>LEAVE NO USERS BEHIND</p>
              <h1>Check your website for accessibility issues</h1>
            </Center>
            <Center>
              <IntroImg
                src="/illustrations/webchecker.svg"
                alt="web checker illustration"
              />
            </Center>
          </div>
        </IntroWrapper>
        <form onSubmit={handleSubmit}>
          <Stack space="medium">
            <TextInput
              type="text"
              id="url"
              label="Enter a Website-URL"
              placeholder="www.futurice.com"
              hintIcon="manicule"
              hintText="It can take a longer time to create reports for big websites."
              iconColor={color.blue}
            />

            <Button type="submit" text="check url" data-type="cta-btn" />
          </Stack>
        </form>
      </Section>

      <Section>
        <ToolOverview data={webCheckerAlt} type="web" />
      </Section>
    </PageContainer>
  );
};
export default WebCheckerPage;
