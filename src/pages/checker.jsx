import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../shared/style";
import Switcher from "../components/layout-components/Switcher";
import Stack from "../components/layout-components/Stack";
import Center from "../components/layout-components/Center";
import TextInput from "../components/text-input/TextInput";
import RadioButton from "../components/radio-button/RadioButton";
import Button from "../components/button/Button";
import ToolOverview from "../components/tool-overview/ToolOverview";

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
    margin-bottom: 4rem;
  }

  & > * > * :first-child {
    flex-grow: 2;
  }

  h1,
  p {
    text-align: center;
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
  width: 100%;
`;

const RadioBtn = styled(RadioButton)`
  text-transform: none;
  font-weight: normal;
  text-align: left;
  margin-right: auto;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const WebCheckerPage = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleCheckedChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <PageContainer>
      <Section>
        <IntroWrapper threshold="40rem">
          <div>
            <Center>
              <p>ACCESSIBILITY WEB CHECKER</p>
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
        <Stack space="medium">
          <TextInput
            type="text"
            id="url"
            label="website-url"
            placeholder="www.futurice.com"
          />
          <Stack space="medium">
            <h5>WHAT TO CHECK</h5>
            <RadioBtn
              label="Check all subpages"
              value="all"
              checked={selectedOption === "all"}
              handleCheckedChange={handleCheckedChange}
            />
            <RadioBtn
              label="Check the given page only"
              value="single"
              checked={selectedOption === "single"}
              handleCheckedChange={handleCheckedChange}
            />
          </Stack>
          <TextInput
            type="email"
            id="email"
            label="email (optional)"
            placeholder="www.futurice.com"
            hintIcon="manicule"
            hintText="Reports of big websites can take a long time to be created. Enter your e-mail address to recieve the finished report after the check."
            iconColor={color.blue}
          />
          <Button text="check url" />
        </Stack>
      </Section>

      <Section>
        <ToolOverview
          title="About the tool"
          toolName="webChecker"
          hasCta={true}
          hasLink={true}
          isExternal={true}
          ctaText="learn more"
          ctaUrl="/"
          linkText="view on github"
          linkUrl="https://github.com/accessibility-tools/website"
          linkIcon="github"
        />
      </Section>
    </PageContainer>
  );
};

export default WebCheckerPage;
