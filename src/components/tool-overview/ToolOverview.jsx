import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";
import CTA from "../CTA/CTA";
import Link from "../links/Link";

const InfoWrapper = styled(Stack)`
  max-width: 30rem;
  text-align: left;
  padding: 0 1.5rem;

  li {
    list-style: disc;
    padding-bottom: 1rem;
    text-align: left;
  }

  a {
    width: max-content;
  }
`;

const ToolImg = styled.img`
  width: 60%;
`;

const ToolLink = styled(Link)`
  font-size: 1rem;
  margin-top: 1rem;
  align-items: center;
`;

const ToolOverview = ({ toolData }) => {
  const { id, title, img, desc, details, ctaData, linkData } = toolData;

  return (
    <Switcher threshold="40rem" space="3.5rem" width="100%">
      <div>
        <Center>
          <ToolImg src={img} alt="image of the tool" />
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
    </Switcher>
  );
};

ToolOverview.propTypes = {
  toolData: PropTypes.object,
};

export default ToolOverview;
