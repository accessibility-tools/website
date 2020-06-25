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

const Index = styled(Stack)`
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

  p {
    max-width: 36rem;
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

const ContactLink = styled(Link)`
  display: inline;
`;

const LandingPage = () => {
  return (
    <>
      <SEO siteTitle="Accessibility checking tools" />
      <Index space="extraLarge">
        <Section>
          <Center>
            <Switcher threshold="35rem" space="1rem" width="90%">
              <div>
                <Center>
                  <Tagline>
                    <h1>Accessibility checking tools</h1>
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
              <p>
                Everybody should be able to use digital products regardless of
                ability, context, or situation. This includes elderly people or
                users with visual, motor, auditory, speech, or cognitive
                disabilities. Our tools help you create products with
                accessibility in mind. tools can help you create prodcuts with
                accessibility in mind.
              </p>
            </Center>
            <ToolOverview
              title="Accessibility Web Checker for Terminal"
              toolName="ciTool"
              hasBadge={false}
              hasLink={true}
            />
          </Stack>
        </Section>

        <Section>
          <ToolOverview
            title="Accessibility Web Checker"
            toolName="webChecker"
            hasBadge={true}
            hasLink={false}
          />
        </Section>

        <Section>
          <Switcher threshold="40rem" space="3.5rem">
            <div>
              <Center>
                <Stack width="auto">
                  <ComingSoon />
                  <img src="/illustrations/product-ios.svg" alt="" />
                  <h3>iOS Checker</h3>
                </Stack>
              </Center>
              <Center>
                <Stack width="auto">
                  <ComingSoon />
                  <img src="/illustrations/product-android.svg" alt="" />
                  <h3>Android Checker</h3>
                </Stack>
              </Center>
            </div>
          </Switcher>
        </Section>

        <Section>
          <SignUp />
        </Section>

        <Section>
          <Stack>
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
                      Detect accessibility issue like the non-use of labels in
                      form elements, missing descriptive alternative text for
                      images, links and other non-text content – and learn how
                      to solve them.
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
                      Make sure everybody can use your interface and get pointed
                      to issues like insufficient font sizing, lack of color
                      contrast and more and learn how to easily fix the
                      problems.
                    </p>
                  </Center>
                </Stack>
              </div>
            </Switcher>
          </Stack>
        </Section>

        <Section id="learnMore">
          <Stack>
            <Center>
              <h2>Learn more</h2>
              <p>
                Why should designers and developers care about accessibility and
                how to get started?
              </p>
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
              <p>
                We are a group of developers and designers, who are passionate
                about accessibility. If you want to be part of this open source
                project, have questions or feedback feel free to reach out.
              </p>
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
      </Index>
    </>
  );
};

export default LandingPage;
