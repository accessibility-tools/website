import React from "react";
import styled from "styled-components";
import { color } from "../shared/style";
import Button from "../components/button/Button";
import Badge from "../components/badge/Badge";
import ToolDetails from "../components/tool-details/ToolDetails";
import Switcher from "../components/layout-components/Switcher";
import Stack from "../components/layout-components/Stack";
import Center from "../components/layout-components/Center";
import SEO from "../components/SEO/SEO";
import FAQ from "../components/learn-more-questions/LearnMoreQuestions";
import Link from "../components/links/Link";
import TextInput from "../components/text-input/TextInput";

const Index = styled(Stack)`
  background-color: ${color.extraLightPurple};
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
    max-width: 100rem;
  }

  h2 {
    margin-left: auto;
    margin-right: auto;
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
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const LandingImg = styled.img`
  width: 80%;
  height: 100%;
  z-index: 100;
  top: calc(11rem + (15 - 11) * ((100vw - 300px) / (1600 - 300)));
`;

const LandingPage = () => {
  return (
    <>
      <SEO siteTitle="Accessibility checking tools" />
      <Index space="extraLarge">
        <Section>
          <Center>
            <Switcher threshold="35rem" space="1rem" width="100%">
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
          <Center>
            <Switcher threshold="40rem" space="3.5rem" width="100%">
              <Stack space="large">
                <Center>
                  <h1>The tools</h1>
                  <p>
                    Everybody should be able to use digital products regardless
                    of ability, context, or situation. Our tools can help you
                    create prodcuts with accessibility in mind.
                  </p>
                </Center>
                <ToolDetails
                  title="Command Line Accessibility Checker"
                  toolName="ciTool"
                  hasBadge={false}
                  hasLink={true}
                />
              </Stack>
            </Switcher>
          </Center>
        </Section>

        <Section>
          <Center>
            <Switcher threshold="40rem" space="3.5rem" width="100%">
              <ToolDetails
                title="Accessibility Web Checker"
                toolName="webChecker"
                hasBadge={true}
                hasLink={false}
              />
            </Switcher>
          </Center>
        </Section>

        <Section>
          <Center>
            <Switcher threshold="40rem" space="3.5rem" width="100%">
              <div>
                <Center>
                  <Stack>
                    <Badge level="serious" />
                    <img src="/illustrations/product-ios.svg" alt="" />
                    <h3>iOS Checker</h3>
                  </Stack>
                </Center>
                <Center>
                  <Stack>
                    <Badge level="serious" />
                    <img src="/illustrations/product-android.svg" alt="" />
                    <h3>Android Checker</h3>
                  </Stack>
                </Center>
              </div>
            </Switcher>
          </Center>
        </Section>

        <Section>
          <Center>
            <Stack space="large">
              <h2>Sign up to be notified for the release</h2>
              <Center>
                <TextInput
                  id="email"
                  label="email"
                  hintText="Your e-mail will not be used for any other purposes. No spam. We promise."
                />
              </Center>
              <Button text="Sign Up" />
            </Stack>
          </Center>
        </Section>

        <Section>
          <Center>
            <Switcher threshold="40rem" space="3.5rem">
              <Stack>
                <h2>How can the tools help you?</h2>
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
                          Detect accessibility issue like the non-use of labels
                          in form elements, missing descriptive alternative text
                          for images, links and other non-text content – and
                          learn how to solve them.
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
                          Make sure everybody can use your interface and get
                          pointed to issues like insufficient font sizing, lack
                          of color contrast and more and learn how to easily fix
                          the problems.
                        </p>
                      </Center>
                    </Stack>
                  </div>
                </Switcher>
              </Stack>
            </Switcher>
          </Center>
        </Section>

        <Section id="learnMore">
          <Center>
            <Switcher threshold="40rem" space="3.5rem" width="100%">
              <Stack>
                <Center>
                  <h2>Learn more</h2>
                  <p>
                    Why should designers and developers care about accessibility
                    and how to get started?
                  </p>
                </Center>
                <Switcher threshold="35rem" space="5rem">
                  <div>
                    <Img src="/illustrations/learn-more.svg" alt="" />
                    <FAQ />
                  </div>
                </Switcher>
              </Stack>
            </Switcher>
          </Center>
        </Section>

        <Section>
          <Center>
            <Stack>
              <h2>About & Contact</h2>
              <p>
                We are a group of developers and designers, who are passionate
                about accessibility. If you want to be part of this open source
                project, have questions or feedback feel free to reach out.
              </p>
              <Center>
                <Link
                  href="mailto:accessibility@futurice.com"
                  isSecondary={true}
                  icon="mailto"
                >
                  accessibility@futurice.com
                </Link>
              </Center>
            </Stack>
          </Center>
        </Section>
      </Index>
    </>
  );
};

export default LandingPage;
