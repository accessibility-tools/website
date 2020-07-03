import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Switcher from "../layout-components/Switcher";

const ReportImg = styled.img`
  width: 19rem;
  height: 21rem;
`;

const Title = styled.div`
  flex: 2;
  align-self: center;
  p {
    max-width: none;
  }
`;

const ReportIntro = ({ isLoaded }) => (
  <Switcher>
    {!isLoaded ? (
      <div>
        <ReportImg
          src="/illustrations/web-checker.svg"
          alt="illustration of report page"
        />
        <Title>
          <p>Thanks for Making the web accessible for everybody</p>
          <h1>Accessibility Report</h1>
        </Title>
      </div>
    ) : (
      <div>
        <ReportImg
          src="/illustrations/start.svg"
          alt="illustration of report page"
        />
        <Title>
          <p>Creating reports for big pages can take up to X minutes</p>
          <h1>Please give us a minute...</h1>
        </Title>
      </div>
    )}
  </Switcher>
);

ReportIntro.propTypes = {
  isLoaded: PropTypes.bool,
};

export default ReportIntro;
