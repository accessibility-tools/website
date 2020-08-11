import React from 'react';
import styled from 'styled-components';

import Stack from '../layout-components/Stack';
import Icon from '../icon/Icon';
import Banner from '../banner/Banner';
import { INode, INodePerPage } from './types';

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin-left: 10px;
    max-width: initial;
  }
  
  .icon {
    width: 1.15em;
  }
`;

const SummaryContainer = styled.div`
  ul {
    margin-top: 5px;
    
    li {
      list-style: inside;
      list-style-type: '-';
    }
  }  
`;

const convertToList = (plainText: string): React.ReactElement => {
  const strings = plainText.split('\n ');

  return (
    <>
      <div>{strings[0]}</div>
      <ul>
        {
          strings.map((item, index) => (
            index !== 0 && <li key={item + index + 1}>{item}</li>
          ))
        }
      </ul>
    </>
  );
};

const NodesDetails: React.FC<INodePerPage> = ({ pageUrl, nodes }) => (
  <Stack
    space="small"
    marginTop={'0'}
  >
    <NoteContainer>
      <Icon icon="tip"/>
      <p>{`On page: ${pageUrl}`}</p>
    </NoteContainer>
    <Stack space="small">
      {nodes.map(({ target, failureSummary }: INode, i: number): React.ReactElement => (
        <div key={i + 1}>
          <SummaryContainer>{failureSummary && convertToList(failureSummary)}</SummaryContainer>
          {
            target.map((selector: string): React.ReactElement => (
              <Banner
                key={`${pageUrl} affected selector ${i + 1}`}
                text={selector}
                width="45rem"
              />
            ))
          }
        </div>
      ))}
    </Stack>
  </Stack>
);

export default NodesDetails;
