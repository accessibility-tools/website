import React from 'react';
import styled from 'styled-components';

import Stack from '../layout-components/Stack';
import Icon from '../icon/Icon';
import Banner from '../banner/Banner';
import { INodePerPage } from './types';
import { color } from '../../shared/style';

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin-left: 8px;
    max-width: initial;
  }
`;

const SimpleLink = styled.a`
  text-transform: none;
  font-weight: initial;
  letter-spacing: normal;
  color: ${color.primary};

  &:hover { 
    color: ${color.mediumGrey};
    cursor: pointer;
  }
  &:active {
    color: ${color.black};
  }
`;

const NodesDetails: React.FC<INodePerPage> = ({ pageUrl, nodes }) => (
  <Stack
    space="small"
    marginTop={'0'}
  >
    <NoteContainer>
      <Icon icon="exclamationMark"/>
      <p>On page:
        <SimpleLink
          href={pageUrl}
          title={`Open in a new browser tab ${pageUrl}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {pageUrl}
        </SimpleLink>
      </p>
    </NoteContainer>
    <Stack space="small">
      {nodes.map(({ target }, i) => (
        target.map((selector) => (
          <Banner
            key={`${pageUrl} affected selector ${i + 1}`}
            text={selector}
            width="45rem"
          />
        ))
      ))}
    </Stack>
  </Stack>
);

export default NodesDetails;
