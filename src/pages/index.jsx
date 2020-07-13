import React from "react";
import styled from "styled-components";
import { color } from "../shared/style";
import Switcher from "../components/layout-components/Switcher";
import Stack from "../components/layout-components/Stack";
import Center from "../components/layout-components/Center";
import SEO from "../components/SEO/SEO";
import FAQ from "../components/learn-more-questions/LearnMoreQuestions";
import Link from "../components/links/Link";
import ToolOverview from "../components/tool-overview/ToolOverview";
import { ciTool, webChecker } from "../constants/toolData";

const PageContainer = styled(Stack)`
  background-color: ${color.extraLightPurple};
`;

const Section = styled.section`
  --paddingX: 2.5rem;
  --paddingY: 10rem;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;

  & > * {
    max-width: 100rem;
  }

  &:first-child {
    padding: var(--paddingY) calc(var(--paddingX) * 3);
  }

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

  @media (max-width: 48rem) {
    &:nth-child(odd) {
      padding: calc(var(--paddingY) / 2) var(--paddingX);
    }

    &:first-child {
      padding-top: var(--paddingY);
    }
  }
`;

const Tagline = styled(Stack)`
  & > * {
    max-width: 36rem;
  }

  h1,
  h5 {
    text-align: left;
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
  top: calc(11rem + (15 - 11) * ((100vw - 300px) / (1600 - 300)));
`;

const LearnMoreImg = styled.img`
  width: 13rem;
  height: 20rem;

  @media (min-width: 48rem) {
    width: 17rem;
    height: 27rem;
  }
`;

const Subtext = styled.p`
  max-width: ${({ width }) => (width ? width : "36rem")};

  @media (max-width: 48rem) {
    text-align: center;
  }
`;

const ContactLink = styled(Link)`
  display: inline;
`;

const LandingPage = () => {
  return (
    <>
      <SEO siteTitle="Accessibility checking tools" />
      <PageContainer>
        <Section>
          <Switcher threshold="35rem" space="0rem">
            <div>
              <Center>
                <Tagline>
                  <h1>
                    Every user counts: accessibility tools for inclusive digital
                    products
                  </h1>
                  <h5>
                    Free, open-source and for everyone who designs and builds
                    digital products
                  </h5>
                </Tagline>
              </Center>
              <Center>
                <LandingImg src="/illustrations/intro.svg" alt="" />
              </Center>
            </div>
          </Switcher>
        </Section>

        <Section id="tools">
          <Stack space="large">
            <Center>
              <h1>Discover our tools</h1>
              <Subtext>
                An estimated 15% of the world population is recognized as living
                with a disability. But beyond that, disability affects us all. A
                broken arm, a loud environment, a health condition and many more
                factors can influence how we interact with a product. With our
                free, open-source tools, you will learn how to build accessible
                digital products for everyone.
              </Subtext>
            </Center>
            <ToolOverview toolData={webChecker} />
            <ToolOverview toolData={ciTool} />
          </Stack>
        </Section>

        <Section id="learn-more">
          <Stack space="large">
            <Center>
              <h2>Learn more</h2>
              <Subtext width="34rem">
                Why should we care about accessibility and how to get started?
              </Subtext>
            </Center>
            <Switcher threshold="35rem" space="5rem">
              <div>
                <LearnMoreImg src="/illustrations/learn-more.svg" alt="" />
                <FAQ />
              </div>
            </Switcher>
          </Stack>
        </Section>

        <Section id="about">
          <Stack width="auto">
            <Center>
              <h2>About & Contact</h2>
              <Subtext>
                We are a group of developers and designers. We are passionate
                about accessible digital products. If you want to be part of
                this open source project, have questions or feedback feel free
                to drop us a message.
              </Subtext>
            </Center>
            <Center>
              <ContactLink
                linkText="accessibility@futurice.com"
                linkUrl="mailto:accessibility@futurice.com"
                linkIcon="mailto"
                isSecondary={true}
              />
            </Center>
          </Stack>
        </Section>
      </PageContainer>
    </>
  );
};

export default LandingPage;
