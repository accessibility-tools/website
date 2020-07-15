import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../../shared/style";
import Stack from "../layout-components/Stack";
import Icon from "../icon/Icon";
import Banner from "../banner/Banner";

const IssueContainer = styled(Stack)`
  padding: 2rem;

  & > * {
    margin-bottom: 2rem;
  }

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

const NoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  p {
    max-width: 36rem;
    margin: 0 1rem;
  }
`;

const FixElement = ({ fixData, eleIndex }) => {
  const { summary, tips, affectedElements } = fixData;
  return (
    <IssueContainer>
      <SubTitle>{summary}</SubTitle>
      <Stack space="small">
        <p>Fix any of the following:</p>
        <ul>
          {tips.map((tip, index) => (
            <li key={`fix tip ${index}`}>- {tip}</li>
          ))}
        </ul>
      </Stack>
      <Stack space="small">
        <SubTitle>Affected elements:</SubTitle>
        {eleIndex === 0 && (
          <NoteContainer>
            <Icon icon="manicule" color={color.blue} />
            <p>
              Each of these boxes contain the name of an element on your
              website. To find the corresponding element in the codebase, you
              can copy and paste the content of a box into your code editor’s
              search feature.
            </p>
          </NoteContainer>
        )}
        {affectedElements.map((element, index) => (
          <Banner key={`affected element ${index}`} text={element} />
        ))}
      </Stack>
    </IssueContainer>
  );
};

FixElement.propTypes = {
  fixData: PropTypes.object,
  eleIndex: PropTypes.number,
};

export default FixElement;
