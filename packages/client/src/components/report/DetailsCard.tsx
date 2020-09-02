import React, {  useState } from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Stack from '../layout-components/Stack';
import Link from '../links/Link';
import ArrowIcon from '../icon/ArrowIcon';
import NodesDetails from './NodesDetails';
import { INodePerPage, IViolation } from './types';
import Icon from '../icon/Icon';


interface IDetailsCard {
  violation: IViolation;
}

const DetailsCardContainer = styled.details`
  background-color: ${color.white};
  border-radius: 6px;
  border: solid 1px ${color.lightGrey1};
  box-shadow: 0 2px 10px 0 ${color.lightGrey2};
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    max-width: 100%;
  }

  &:focus, &:focus-within {
    outline: 4px solid ${color.darkBlue};
  }
  &:active {
    background-color: ${color.lightPurple};
  }
`;

const Summary = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 3px;
  padding: 2.5rem;

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  & > div > p {
    max-width: none;
    font-weight: normal;

    margin-top: 8px;
    margin-bottom: 16px;
  }
  & > div:last-child {
    padding-top: 8px;
  }
`;

const ViolationContainer = styled(Stack)`
  padding: 0rem 2.5rem 2.5rem;

  &:nth-child(even) {
    background-color: ${color.lightPurple};
  }

  ul {
    padding-left: 0;
  }
`;

const InfoContainer = styled.div`
  background-color: ${color.purple};
  padding: 1rem;
  display: grid;
  grid-template-columns: 1.5em auto;
  align-items: baseline;
  max-width: 39em;

  p {
    max-width: initial;
  }
  svg{
    position:relative;
    top:.1em;
  }

  & > div {
    @media (max-width: 48rem) {
      align-items: initial;
    }
  }
`;

const ResourceLink = styled(Link)`
  text-decoration: underline;
  text-decoration-thickness: 2px;
  & > span {
    &::after {
      content: none;
    }
`;


const DetailsCard: React.FC<IDetailsCard> = ({ violation }) => {
  const { title, description, helpUrl, nodesPerPage } = violation;
  const issueNodes = nodesPerPage.reduce((acc: number, { nodes }: INodePerPage) => acc + nodes.length, 0);
  const [isOpened, setOpened] = useState<boolean>(false);

  const handleOpen = (e: React.BaseSyntheticEvent): void => {
    setOpened(e.currentTarget.open);
  };

  return (
    <DetailsCardContainer onToggle={handleOpen}>
      <Summary>
        <div>
          <h3>{`${title} (${issueNodes})`}</h3>
          <p>{description}</p>
          <ResourceLink
            url={helpUrl}
            text="Resource to solve this issue"
            icon="extLink"
            isExternal={true}
          />
        </div>
        <div>
          <ArrowIcon
            icon="bArrow"
            direction={isOpened && 'up' || ''}
          />
        </div>
      </Summary>

      <Stack space="medium">
        <ViolationContainer>
          <Stack
            key={'affected'}
            space="small"
          >
            <h4>Which elements should be fixed?</h4>
            <InfoContainer>
              <Icon
                icon="manicule"
                color={color.blue}
              />
              <Stack space="small">
                <p>
                  <strong>Find in browser:</strong>
                  <br/>
                  Open the page with the affected element. Open the inspector with a
                  right-click and choose “Inspect”. Copy the CSS selector into the
                  inspector search.
                </p>
                <p>
                  <strong>Find in codebase:</strong>
                  <br/>
                  Copy the CSS selector into the code editor search.
                </p>
              </Stack>
            </InfoContainer>
            {
              nodesPerPage.map((data: INodePerPage, i: number) => (
                <NodesDetails key={i + 1} {...data} />
              ))
            }
          </Stack>
        </ViolationContainer>
      </Stack>
    </DetailsCardContainer>
  );
};

export default DetailsCard;
