import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Stack from '../layout-components/Stack';
import Icon from '../icon/Icon';
import Banner from '../banner/Banner';
import { IFixElement, INoteContainer } from './types';

const IssueContainer = styled(Stack)`
  padding: 2rem;

  &:nth-child(even) {
    background-color: ${color.lightPurple};
  }

  ul {
    padding-left: 0;
  }
`;

const SubTitle = styled.h5`
  max-width: none;
`;

const NoteContainer = styled.div<INoteContainer>`
  background-color: ${({ isBackground }) =>
    isBackground && color.extraLightPurple};
  margin: ${({ isMargin }) => isMargin && '1rem -2rem'};
  padding: ${({ isPadding }) => isPadding && '1rem'};
  display: grid;
  grid-template-columns: 3% auto;
  align-items: baseline;

  p {
    max-width: 36rem;
  }
`;

const FixElement: React.FC<IFixElement> = ({ fixData }) => {
  const { summary, tips, affectedElements } = fixData;

  return (
    <IssueContainer>
      <Stack space="small">
        <SubTitle>{summary}</SubTitle>
        <p>Fix any of the following:</p>
        <ul>
          {tips.map(
            (tip: string, index: number): React.ReactNode => (
              <li key={`fix tip ${index}`}>- {tip}</li>
            )
          )}
        </ul>
      </Stack>
      <Stack space="medium">
        <SubTitle>Affected elements:</SubTitle>
        <NoteContainer isBackground isPadding isMargin>
          <Icon icon="manicule" color={color.blue} />
          <Stack space="small">
            <p>
              <strong>Find in browser:</strong>
              <br />
              Open the page with the affected element. Open the inspector with a
              right-click and choose “Inspect”. Copy the selector into the
              inspector search.
            </p>
            <p>
              <strong>Find in codebase:</strong>
              <br />
              Copy the selector into the code editor search.
            </p>
          </Stack>
        </NoteContainer>

        {affectedElements.map(
          (
            { page, selectors }: { page: string; selectors: string[] },
            index: number
          ): React.ReactElement => (
            <Stack space="small" key={`${page} affected element ${index}`}>
              <NoteContainer>
                <Icon icon="tip" />
                <p>{`On page: ${page}`}</p>
              </NoteContainer>
              {selectors.map(
                (selector: string): React.ReactElement => (
                  <Banner
                    key={`${page} affected selector ${index}`}
                    text={selector}
                    width="40rem"
                  />
                )
              )}
            </Stack>
          )
        )}
      </Stack>
    </IssueContainer>
  );
};

export default FixElement;
