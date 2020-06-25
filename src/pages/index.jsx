import React from "react";
import styled from "styled-components";
import { color } from "../shared/style";
import ToolOverview from "../components/tool-overview/ToolOverview";
import Switcher from "../components/layout-components/Switcher";
import Stack from "../components/layout-components/Stack";
import Center from "../components/layout-components/Center";
import SEO from "../components/SEO/SEO";
import FAQ from "../components/learn-more-questions/LearnMoreQuestions";
import Link from "../components/links/Link";
import SignUp from "../components/sign-up/SignUp";
import ComingSoon from "../components/badge/ComingSoonBadge";

const MainContainer = styled(Stack)`
  background-color: ${color.extraLightPurple};
`;

const Section = styled.section`
  padding: 8rem 2rem;

  &:nth-child(even) {
    background-color: ${color.lightPurple};
    clip-path: polygon(0% 4rem, 100% 0%, 100% calc(100% - 4rem), 0% 100%);
    -webkit-clip-path: polygon(
      0% 4rem,
      100% 0%,
      100% calc(100% - 4rem),
      0% 100%
    );
  }

  &:nth-child(even):last-child {
    clip-path: polygon(0% 4rem, 100% 0%, 100% 100%, 0% 100%);
    -webkit-clip-path: polygon(0% 4rem, 100% 0%, 100% 100%, 0% 100%);
  }

  &:nth-child(6) {
    p {
      max-width: 24rem;
    }
  }

  & > * {
    max-width: 100rem;
  }
`;

const Tagline = styled(Stack)`
  & > * {
    max-width: 30rem;
  }

  h5 {
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-weight: 500;
    line-height: 1.56;
  }
`;

const LandingImg = styled.img`
  width: 80%;
  height: 100%;
  z-index: 100;
  top: calc(11rem + (15 - 11) * ((100vw - 300px) / (1600 - 300)));
`;

const LearnMoreImg = styled.img`
  width: 204px;
  height: 324px;

  @media (min-width: 48rem) {
    width: 276px;
    height: 439px;
  }
`;

const Subtitle = styled.p`
  max-width: 576px;
`;

const ContactLink = styled(Link)`
  display: inline;
`;

const LandingPage = () => {
  return (
    <>
      <SEO siteTitle="Accessibility checking tools" />
      <MainContainer>
        <Section>
          <Center>
            <Switcher threshold="35rem" space="1rem" width="90%">
              <div>
                <Center>
                  <Tagline>
                    <h1>Tools for digital accessibility</h1>
                    <h5>
                      Helping designers and developers build accessible products
                    </h5>
                  </Tagline>
                </Center>
                <Center>
                  <LandingImg src="/illustrations/start.svg" alt="" />
                </Center>
              </div>
            </Switcher>
          </Center>
        </Section>

        <Section>
          <Stack space="large">
            <Center>
              <h1>The tools</h1>
              <Subtitle>
                We believe digital products should be equally accessible for
                everybody. This includes elderly people or users with visual,
                motor, auditory, speech, or cognitive disabilities. Our free,
                open source tools make it easy to create products with
                accessibility in mind.
              </Subtitle>
            </Center>
            <ToolOverview
              title="Accessibility checker for websites"
              toolName="ciTool"
              hasBadge={false}
              hasList={true}
              hasLink={true}
            />
          </Stack>
        </Section>

        <Section>
          <ToolOverview
            title="Online accessibility checker for websites"
            toolName="webChecker"
            hasBadge={true}
            hasLink={false}
          />
        </Section>

        <Section>
          <Switcher threshold="40rem" space="3.5rem">
            <div>
              <Center>
                <Stack width="auto" center="center">
                  <ComingSoon />
                  <img src="/illustrations/product-ios.svg" alt="" />
                  <h3>
                    Accessibiliy checker <br />
                    for iOS
                  </h3>
                </Stack>
              </Center>
              <Center>
                <Stack width="auto" center="center">
                  <ComingSoon />
                  <img src="/illustrations/product-android.svg" alt="" />
                  <h3>
                    Accessibiliy checker <br />
                    for Android
                  </h3>
                </Stack>
              </Center>
            </div>
          </Switcher>
        </Section>

        <Section>
          <SignUp />
        </Section>

        <Section>
          <Stack space="large">
            <Center>
              <h2>How can the tools help you?</h2>
            </Center>
            <Switcher threshold="35rem" space="3.5rem">
              <div>
                <Stack>
                  <img
                    src="/illustrations/persona-a.svg"
                    alt="illustration of a developer"
                  />
                  <Center>
                    <h3>As a developer</h3>
                    <p>
                      Easily detect and correct accessibility issue in your
                      code. Did you forget to use labels in form elements? Are
                      there any missing text alternatives for images? There is
                      so much to keep in mind. Our tools will help you out.
                    </p>
                  </Center>
                </Stack>
                <Stack>
                  <img
                    src="/illustrations/persona-b.svg"
                    alt="illustration of a designer"
                  />
                  <Center>
                    <h3>As a designer</h3>
                    <p>
                      Make sure your designs can be used by everybody. Our tool
                      will point you to issues like insufficient font sizing,
                      lack of color contrast and more. We will explain how to
                      solve these issues to make your workflow easier.
                    </p>
                  </Center>
                </Stack>
              </div>
            </Switcher>
          </Stack>
        </Section>

        <Section id="learnMore">
          <Stack space="large">
            <Center>
              <h2>Learn more</h2>
              <Subtitle>
                Why should we as designers and developers care about
                accessibility. How to get started?
              </Subtitle>
            </Center>
            <Switcher threshold="35rem" space="5rem">
              <div>
                <LearnMoreImg src="/illustrations/learn-more.svg" alt="" />
                <FAQ />
              </div>
            </Switcher>
          </Stack>
        </Section>

        <Section>
          <Stack width="auto">
            <Center>
              <h2>About & Contact</h2>
              <Subtitle>
                We are a group of developers and designers. We are passionate
                about accessible digital products. If you want to be part of
                this open source project, have questions or feedback feel free
                to drop us a message.
              </Subtitle>
            </Center>
            <Center>
              <ContactLink
                href="mailto:accessibility@futurice.com"
                isSecondary={true}
                icon="mailto"
              >
                accessibility@futurice.com
              </ContactLink>
            </Center>
          </Stack>
        </Section>
      </MainContainer>
    </>
  );
};

export default LandingPage;
