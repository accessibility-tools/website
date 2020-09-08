import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Switcher from '../layout-components/Switcher';
import Stack from '../layout-components/Stack';
import { Button } from '../button/Button';
import Icon from '../icon/Icon';
import OverviewCard from './OverviewCard';
import { TViolationsPerImpact } from './types';


interface IReportOverview {
  violationsPerImpact: TViolationsPerImpact;
  pagesScanned: string[];
  websiteUrl: string;
}

const OverviewContainer = styled(Stack)`
  padding: 0;
  max-width: 80vw;

  span {
    color: ${color.blue};
  }

  button {
    height: 3rem;
  }

  @media (min-width: 48rem) {
    width: 100%;
  }
`;

const TitleContainer = styled(Stack)`
  flex: 5;
  @media (max-width: 800px){
    flex: none;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }
`;

const Subtitle = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
`;

const NoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: 5px;

  p {
    max-width: 36rem;
    margin: 0 1rem;

  }
  svg{
    top: 2px;
  }
  @media (max-width: 800px){
    svg{
      position: relative;
      top: 1em;
    }
    p {
      margin: 0 1.5rem;
    }
  }

`;
const CopyButton = styled(Button)`
  @media (max-width: 800px){
    margin-left: auto;
    margin-right: auto;
  }
`;

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};


const ReportOverview: React.FC<IReportOverview> = ({
  violationsPerImpact,
  pagesScanned,
  websiteUrl,
}) => {
  const totalIssueCount = Object.values(violationsPerImpact).reduce((a, b) => a + b, 0);
  const urlWithoutProtocol = websiteUrl.replace(/^https?:\/\//,'');

  return (
    <OverviewContainer>
      <Switcher threshold="35rem">
        <div>
          <TitleContainer space="small">
            <h2>
              Report for <span>{urlWithoutProtocol}</span>
            </h2>
            <Subtitle>{pagesScanned.length} pages scanned</Subtitle>
          </TitleContainer>
          <CopyButton text="Copy URL" onClick={()=>copyToClipboard(websiteUrl)}/>
        </div>
      </Switcher>
      <Switcher threshold="35rem">
        <div>
          <OverviewCard
            title={`${totalIssueCount} Detected issues`}
            subtext="Seems like there are some accessibility issues on this website to improve.
            Some are more critical than others to enable access for all users."
            isViolation
            violationsPerImpact={violationsPerImpact}
          />
        </div>
      </Switcher>
      <NoteContainer>
        <Icon
          icon="manicule"
          color={color.blue}
        />
        <p>
          Automated tests like this one can assess up to <strong>30%</strong> of
          accessibility issues. In addition, we recommend performing a manual
          test and testing with real users.
        </p>
      </NoteContainer>
    </OverviewContainer>
  );
};

export default ReportOverview;
