import React from 'react';
import styled from 'styled-components';

import Switcher from '../layout-components/Switcher';
import Stack from '../layout-components/Stack';
import Center from '../layout-components/Center';
import MobileCenter from '../layout-components/MobileCenter';
import CTA from '../CTA/CTA';
import Link from '../links/Link';
import Banner from '../banner/Banner';
import { IToolImg, IToolOverview } from './types';

const InfoWrapper = styled(Stack)`
  max-width: 32rem;
  text-align: left;

  p {
    max-width: none;
  }

  li {
    list-style: disc;
    padding-bottom: 1rem;
    text-align: left;
  }

  @media (max-width: 48rem) {
    width: 90%;
  }
  @media (max-width:800px){
    ul{
      padding-left:1rem;
    }
    ul li {
      list-style: disc;
      list-style-position: outside;
      font-size: 12px;
      padding-left:20px
    }
    span {
        font-size: 16px;
        vertical-align: middle;
    }
  }
`;

const ToolImg = styled.img<IToolImg>`
  width: 85%;
  transform: ${({ isTransform }) => isTransform && 'scaleX(-1)'};
`;

const ToolLink = styled(Link)`
  font-size: 1rem;
  margin-top: 1rem;
  align-items: center;
  border: 2px solid grey;
  padding: .5rem 4.4rem;
  width: fit-content;
  color: grey;
  &:visited {
    color: grey;
  }
  @media (max-width: 800px){
    padding: .5rem 3.9rem;
  }
  span{
    text-decoration:none;
    &::after{
      content: none;
    }
  }
`;

const ToolOverview: React.FC<IToolOverview> = ({ data, type }) => {
  const { id, title, img, desc, details, ctaData, linkData } = data;

  return (
    <Switcher threshold="40rem" space="3.5rem" width="100%">
      {type === 'web' ? (
        <div>
          <Center>
            <ToolImg src={img} alt="image of web tool" />
          </Center>
          <Center>
            <InfoWrapper>
              <h2>{title}</h2>
              <p>{desc}</p>
              {details && (
                <ul>
                  {details.map(
                    (detail: string, index: number): React.ReactNode => (
                      <li key={`${id} detail ${index}`}>
                        <span>{detail}</span>
                      </li>
                    )
                  )}
                </ul>
              )}
              <MobileCenter>
              {Object.keys(ctaData).length !== 0 && <CTA {...ctaData} />}
              {Object.keys(linkData).length !== 0 && <ToolLink {...linkData} />}
              </MobileCenter>
            </InfoWrapper>
          </Center>
        </div>
      ) : (
        <div>
          <Center>
            <InfoWrapper>
              <h2>{title}</h2>
              <Stack space="small">
                <p>{desc}</p>
                <Banner text={details[0]} />
                <p>{details[1]}</p>
                <Banner text={details[2]} />
              </Stack>
              {Object.keys(ctaData).length !== 0 && <CTA {...ctaData} />}
            </InfoWrapper>
          </Center>
          <Center>
            <ToolImg src={img} alt="image of ci tool" />
          </Center>
        </div>
      )}
    </Switcher>
  );
};

export default ToolOverview;
