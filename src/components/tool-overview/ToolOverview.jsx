import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";
import CTA from "../CTA/CTA";
import Link from "../links/Link";
import Banner from "../banner/Banner";

const InfoWrapper = styled(Stack)`
  max-width: 34rem;
  text-align: left;
  padding: 0 1.5rem;

  p {
    max-width: none;
  }

  li {
    list-style: disc;
    padding-bottom: 1rem;
    text-align: left;
  }

  a {
    width: 20rem;
  }

  @media (max-width: 48rem) {
    width: 90%;
  }
`;

const ToolImg = styled.img`
  width: 60%;
  transform: ${({ transform }) => transform && "scaleX(-1)"};
`;

const ToolLink = styled(Link)`
  font-size: 1rem;
  margin-top: 1rem;
  align-items: center;
`;

const ScriptWrapper = styled(Stack)`
  & > * + * {
    margin-top: 1rem;
  }
`;

const ToolOverview = ({ data, type }) => {
  const { id, title, img, desc, details, ctaData, linkData } = data;

  return (
    <Switcher threshold="40rem" space="3.5rem" width="100%">
      {type === "web" ? (
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
                  {details.map((detail, index) => (
                    <li key={`${id} detail ${index}`}>{detail}</li>
                  ))}
                </ul>
              )}
              {Object.keys(ctaData).length !== 0 && <CTA {...ctaData} />}
              {Object.keys(linkData).length !== 0 && <ToolLink {...linkData} />}
            </InfoWrapper>
          </Center>
        </div>
      ) : (
        <div>
          <Center>
            <InfoWrapper>
              <h2>{title}</h2>
              <ScriptWrapper>
                <p>{desc}</p>
                <Banner text={details[0]} />
                <p>{details[1]}</p>
                <Banner text={details[2]} />
              </ScriptWrapper>
              {Object.keys(ctaData).length !== 0 && <CTA {...ctaData} />}
            </InfoWrapper>
          </Center>
          <Center>
            <ToolImg src={img} alt="image of ci tool" transform />
          </Center>
        </div>
      )}
    </Switcher>
  );
};

ToolOverview.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
};

export default ToolOverview;
