import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button/Button";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";

// TODO: This is just an initial implementation, and needs maybe some rethinking when we actually have every detail for every tool that uses this component
const toolImages = {
  webChecker: "/illustrations/start.svg",
  ciTool: "/illustrations/start.svg",
};

const InfoWrapper = styled(Stack)`
  max-width: 25rem;
  text-align: left;
`;

const Img = styled.img`
  width: 60%;
`;

const ToolDetails = ({ title, tool }) => (
  <Switcher>
    <div>
      <Center>
        <Img src={toolImages[tool]} alt="" />
      </Center>
      <Center>
        <InfoWrapper>
          <h2>{title}</h2>
          <p>
            With our tool for web you can run a check for any website to detect
            and fix accessibility issues. In addition you get introduced to best
            practices and guidelines.
          </p>
          <Stack>
            <Button text="Check out the tool" />
            <Button text="Check out the tool" isSecondary icon="github" />
          </Stack>
        </InfoWrapper>
      </Center>
    </div>
  </Switcher>
);

ToolDetails.propTypes = {
  title: PropTypes.string.isRequired,
  tool: PropTypes.string,
};

export default ToolDetails;
