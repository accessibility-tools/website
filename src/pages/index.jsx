import React from "react";
import styled from "styled-components";
import { color } from "../shared/style";
import Button from "../components/button/Button";
import ToolDetails from "../components/tool-details/ToolDetails";
import Switcher from "../components/layout-components/Switcher";
import Stack from "../components/layout-components/Stack";
import Center from "../components/layout-components/Center";
import SEO from "../components/SEO/SEO";

const Index = styled(Stack)`
  background-color: ${color.extraLightPurple};
`;

const HeaderWrapper = styled(Center)`
  max-width: 40rem;
  margin-bottom: auto;
  margin-top: auto;
  & > h1 {
    margin-bottom: 1rem;
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;

  &:nth-child(even) {
    background-color: ${color.lightPurple};
    padding: 10rem 2rem;
    clip-path: polygon(0% 4rem, 100% 0%, 100% calc(100% - 4rem), 0% 100%);
    -webkit-clip-path: polygon(
      0% 4rem,
      100% 0%,
      100% calc(100% - 4rem),
      0% 100%
    );
  }

  &:nth-child(even):last-child {
    background-color: ${color.lightPurple};
    padding: 10rem 2rem;
    clip-path: polygon(0% 4rem, 100% 0%, 100% 100%, 0% 100%);
    -webkit-clip-path: polygon(0% 4rem, 100% 0%, 100% 100%, 0% 100%);
  }

  & > * {
    max-width: 60rem;
  }
`;

const ToolsIntro = styled(Center)`
  max-width: 20rem;
`;

const Img = styled.img`
  width: 50vw;
  max-width: 40rem;

  z-index: 100;
`;

const LandingPage = () => {
  return (
    <>
      <SEO siteTitle="Accessibility checking tools" />
      <Index space="extraLarge">
        <Section>
          <Center>
            <Switcher>
              <div>
                <HeaderWrapper>
                  <h1>Accessibility checking tools</h1>
                  <h2 className="subtitle">
                    Helping designers and developers build accessible products
                  </h2>
                </HeaderWrapper>
                <Center>
                  <Img src="/illustrations/start.svg" alt="" />
                </Center>
              </div>
            </Switcher>
          </Center>
        </Section>
        <Section>
          <Center>
            <Stack space="large">
              <ToolsIntro>
                <h2>The tools</h2>
                <p>
                  Everybody should be able to use digital products regardless of
                  ability, context, or situation. Our tools can help you create
                  prodcuts with accessibility in mind.
                </p>
                <a href="#learnMore">Learn more</a>
              </ToolsIntro>
              <ToolDetails
                title="Accessibility Web Checker"
                tool="webChecker"
              />
            </Stack>
          </Center>
        </Section>
        <Section>
          <Center>
            <Stack space="medium">
              <h2>Accessibility tools coming soon</h2>
              <Switcher treshold="50rem" space="9rem">
                <div>
                  <Stack space="small">
                    <img src="/illustrations/product-ci.svg" alt="" />
                    <h3>Command line tool</h3>
                  </Stack>
                  <Stack space="small">
                    <img src="/illustrations/product-ios.svg" alt="" />
                    <h3>iOS Checker</h3>
                  </Stack>
                  <Stack space="small">
                    <img src="/illustrations/product-android.svg" alt="" />
                    <h3>Android Checker</h3>
                  </Stack>
                </div>
              </Switcher>
              <Center>
                <Button text="View on github" icon="github" isSecondary />
              </Center>
            </Stack>
          </Center>
        </Section>
        <Section>
          <Center>
            <Stack>
              <h2>How can the tools help you?</h2>
              <Switcher treshold="30rem" space="3.5rem">
                <div>
                  <Stack>
                    <img src="/illustrations/persona-a.svg" alt="" />
                    <h3>As a developer</h3>
                    <p>
                      Detect accessibility issue like the non-use of labels in
                      form elements, missing descriptive alternative text for
                      images, links and other non-text content – and learn how
                      to solve them.
                    </p>
                  </Stack>
                  <Stack>
                    <img src="/illustrations/persona-b.svg" alt="" />
                    <h3>As a designer</h3>
                    <p>
                      Make sure everybody can use your interface and get pointed
                      to issues like insufficient font sizing, lack of color
                      contrast and more and learn how to easily fix the
                      problems.
                    </p>
                  </Stack>
                </div>
              </Switcher>
            </Stack>
          </Center>
        </Section>
      </Index>
    </>
  );
};

export default LandingPage;
