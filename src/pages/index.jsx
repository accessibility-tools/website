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
  padding-left: 2rem;
  padding-right: 2rem;
  &:first-child {
    padding-top: 10rem;
  }
  &:nth-child(2) {
    padding: 10rem 2rem;
  }

  &:nth-child(even) {
    background-color: ${color.lightPurple};
    clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
  }
`;

const Tools = styled(Center)`
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
        </Section>
        <Section>
          <Stack space="large">
            <Tools>
              <h2>The tools</h2>
              <p>
                Everybody should be able to use digital products regardless of
                ability, context, or situation. Our tools can help you create
                prodcuts with accessibility in mind.
              </p>
              <Button text="Learn more" isSecondary />
            </Tools>
            <ToolDetails title="Accessibility Web Checker" tool="webChecker" />
          </Stack>
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
        <Section></Section>
      </Index>
    </>
  );
};

export default LandingPage;
