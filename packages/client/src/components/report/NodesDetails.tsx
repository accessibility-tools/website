import React from 'react';
import styled from 'styled-components';

import Stack from '../layout-components/Stack';
import Icon from '../icon/Icon';
import Banner from '../banner/Banner';
import { INodesDetails } from './types';

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

const NodesDetails: React.FC<INodesDetails> = ({ pageUrl, nodes }) => (
  <Stack
    space="small"
    marginTop={'0'}
  >
    <NoteContainer>
      <Icon icon="tip"/>
      <p>{`On page: ${pageUrl}`}</p>
    </NoteContainer>
    {nodes.map((
      { target }: { target: string[] }, index: number
    ): React.ReactNode[] => (
      target ? target.map((selector: string): React.ReactElement => (
        <Banner
          key={`${pageUrl} affected selector ${index + 1}`}
          text={selector}
          width="45rem"
        />
      )) : []
    ))}
  </Stack>
);

export default NodesDetails;
