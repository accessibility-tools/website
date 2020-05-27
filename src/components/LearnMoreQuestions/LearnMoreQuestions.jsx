import React from "react";
import Details from "../details/Details";
import styled from "styled-components";

const Paragraph = styled.p`
  padding-left: 1rem;
`;

const StyledLearnMoreQuestions = styled.div`
  text-align: left;
`;

const LearnMoreQuestions = () => (
  <StyledLearnMoreQuestions>
    <Details title="What is accessibility?">
      <Paragraph>
        &quot;It’s not just about disabled users being able to access your
        website — it’s about everyone being able to access your website.&quot; -
        Thomas Trenton
      </Paragraph>
      <Paragraph>
        When building with accessibility in mind you ensure that everyone is
        able to properly use your product regardless of ability, context, or
        situation. A common example is making sure high enough color contrast is
        used so that content is readable for everybody.{" "}
      </Paragraph>
    </Details>
    <Details title="Why should I care about accessibility?">
      <Paragraph>
        By implementing accessible practices, you act in the best interest of
        all communities. People use a interface in different situations - make
        sure it delivers a valuable experience to all people regardless of their
        circumstances, ability, context or situation.
      </Paragraph>
      <Paragraph>
        Accessibility affects all of use. A broken arm, a loud enviorment, a
        disability and many more factors can influence how we interact with a
        product.
      </Paragraph>
    </Details>
    <Details title="What are common issues for developers and how to solve them?">
      <Paragraph>
        Common issues caused by development are the non-use of labels in form
        elements, missing descriptive alternative text for images, links and
        other non-text content, instructions, error messages, and notifications,
        lack of responsiveness and the use of CAPTCHA interfaces.
      </Paragraph>
      <Paragraph>Learn more here</Paragraph>
    </Details>
    <Details title="What are common issues for designers and how to solve them?">
      <Paragraph>
        Common issues caused by design are related to insufficient font sizing
        and color contrast, relying on use of colour alone, a lack of unique
        styles for different states, lack of responsivness of elements and not
        testing with real users.
      </Paragraph>
      <Paragraph>Learn more here</Paragraph>
    </Details>
  </StyledLearnMoreQuestions>
);

export default LearnMoreQuestions;
