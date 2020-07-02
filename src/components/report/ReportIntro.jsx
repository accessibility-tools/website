import React from "react";
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

const ReportIntro = () => (
  <Switcher>
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
  </Switcher>
);

export default ReportIntro;
