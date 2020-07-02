import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";
import CTA from "../CTA/CTA";
import Link from "../links/Link";

const toolData = {
  ciTool: {
    img: "/illustrations/citool-placeholder.png",
    desc: "Run our tool in the terminal to create a report for any website:",
    details: [
      "Detect and fix accessibility issues like missing labels, lack of color contrast many more.",
      "Check huge websites with multiple pages in just one session.",
      "Learn if your website is complying to important standards in the industry and how to improve.",
    ],
  },
  webChecker: {
    img: "/illustrations/webchecker-placeholder.png",
    desc:
      "Check any website for accessibiliy issues by simply entering a URL into our online tool. Optionally you can recieve the detailed report via e-mail or share it with other people to tackle accessibility issues together.",
    details: [],
  },
};

const InfoWrapper = styled(Stack)`
  max-width: 30rem;
  text-align: left;
  padding: 0 1.5rem;

  li {
    list-style: disc;
    padding-bottom: 1rem;
    text-align: left;
  }

  a {
    width: max-content;
  }
`;

const ToolImg = styled.img`
  width: 60%;
`;

const ToolLink = styled(Link)`
  font-size: 1rem;
  margin-top: 1rem;
  align-items: center;
`;

const ToolOverview = ({
  title,
  toolName,
  hasList,
  hasCta,
  ctaText,
  ctaUrl,
  ctaIcon,
  hasLink,
  linkText,
  linkUrl,
  linkIcon,
  isExternal,
}) => (
  <Switcher threshold="40rem" space="3.5rem" width="100%">
    <div>
      <Center>
        <ToolImg src={toolData[toolName].img} alt="image of the tool" />
      </Center>
      <Center>
        <InfoWrapper>
          <h2>{title}</h2>
          <p>{toolData[toolName].desc}</p>
          {hasList && (
            <ul>
              {toolData[toolName].details.map((detail, index) => (
                <li key={`${toolName} detail ${index}`}>{detail}</li>
              ))}
            </ul>
          )}

          {hasCta && <CTA text={ctaText} href={ctaUrl} icon={ctaIcon} />}
          {hasLink && (
            <ToolLink href={linkUrl} isExternal={isExternal} icon={linkIcon}>
              {linkText}
            </ToolLink>
          )}
        </InfoWrapper>
      </Center>
    </div>
  </Switcher>
);

ToolOverview.propTypes = {
  title: PropTypes.string.isRequired,
  toolName: PropTypes.string.isRequired,
  hasCta: PropTypes.bool,
  hasLink: PropTypes.bool,
  hasList: PropTypes.bool,
  isExternal: PropTypes.bool,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  ctaIcon: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  linkIcon: PropTypes.string,
};

export default ToolOverview;
