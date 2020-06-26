import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";
import ComingSoon from "../badge/ComingSoonBadge";
import CTA from "../CTA/CTA";

const toolData = {
  ciTool: {
    img: "/illustrations/citool-placeholder.png",
    desc: "Run our tool in the terminal to create a report for any website:",
  },
  webChecker: {
    img: "/illustrations/webchecker-placeholder.png",
    desc:
      "Check any website for accessibiliy issues by simply entering a URL into our online tool. Optionally you can recieve the detailed report via e-mail or share it with other people to tackle accessibility issues together.",
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

const ToolOverview = ({ title, toolName, hasBadge, hasList, hasLink }) => (
  <Switcher threshold="40rem" space="3.5rem" width="100%">
    <div>
      <Center>
        <ToolImg src={toolData[toolName].img} alt="image of the tool" />
      </Center>
      <Center>
        <InfoWrapper>
          {hasBadge && <ComingSoon />}
          <h2>{title}</h2>
          <p>{toolData[toolName].desc}</p>
          {hasList && (
            <ul>
              <li>
                Detect and fix accessibility issues like missing labels, lack of
                color contrast many more.
              </li>
              <li>
                Check huge websites with multiple pages in just one session.
              </li>
              <li>
                Learn if your website is complying to important standards in the
                industry and how to improve.
              </li>
            </ul>
          )}
          {hasLink && <CTA text="View on Github" icon="extLink" />}
        </InfoWrapper>
      </Center>
    </div>
  </Switcher>
);

ToolOverview.propTypes = {
  title: PropTypes.string.isRequired,
  toolName: PropTypes.string.isRequired,
  hasBadge: PropTypes.bool,
  hasLink: PropTypes.bool,
  hasList: PropTypes.bool,
};

export default ToolOverview;
