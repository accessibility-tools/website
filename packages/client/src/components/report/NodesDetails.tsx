import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Stack from '../layout-components/Stack';
import Icon from '../icon/Icon';
import Banner from '../banner/Banner';
import { INodesDetails, INoteContainer } from './types';

export const NoteContainer = styled.div<INoteContainer>`
  background-color: ${({ isBackground }) => isBackground && color.extraLightPurple};
  margin: ${({ isMargin }) => isMargin && '1rem -2rem'};
  padding: ${({ isPadding }) => isPadding && '1rem'};
  display: grid;
  grid-template-columns: 3% auto;
  align-items: baseline;

  p {
    max-width: 36rem;
  }
`;

const NodesDetails: React.FC<INodesDetails> = ({ pageUrl, nodes }) => (
  <Stack space="small">
    <NoteContainer>
      <Icon icon="tip"/>
      <p>{`On page: ${pageUrl}`}</p>
    </NoteContainer>
    {nodes.map(({ target }: { target: string[] }, index: number): React.ReactElement => (
      <>
        {
          target.map((selector: string): React.ReactElement => (
            <Banner
              key={`${pageUrl} affected selector ${index}`}
              text={selector}
              width="40rem"
            />
          ))
        }
      </>
    ))}
  </Stack>
);

export default NodesDetails;
