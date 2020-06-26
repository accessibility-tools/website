import React from "react";
import Details from "../details/Details";
import styled from "styled-components";
import Stack from "../layout-components/Stack";

const LearnMoreWrapper = styled(Stack)`
  flex: 2;
`;

const LinkText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
`;

const LearnMoreQuestions = () => (
  <LearnMoreWrapper>
    <Details title="What is accessibility?">
      <p>
        &quot;It’s not just about disabled users being able to access your
        website — it’s about everyone being able to access your website.&quot; -
        Thomas Trenton
      </p>
      <p>
        When building with accessibility in mind we ensure that everyone is able
        to properly use the product we put out in the world. Regardless of
        ability, context, or situation. A common example is making sure high
        enough color contrast is used so that content is readable for everybody.
      </p>
      <LinkText>MORE ABOUT WEB ACCESSIBILITY</LinkText>
    </Details>
    <Details title="Why should I care about accessibility?">
      <p>
        By implementing accessible practices, we act in the best interest of all
        communities. People use a interface in different situations - make sure
        it delivers a valuable experience to all people regardless of their
        circumstances, ability, context or situation.
      </p>
      <p>
        Accessibility affects all of us. A broken arm, a loud enviorment, a
        disability and many more factors can influence how we interact with a
        product.
      </p>
      <LinkText>MORE ABOUT WHY ACCESSIBILITY MATTERS</LinkText>
    </Details>
    <Details title="What are common issues for developers and how to solve them?">
      <p>
        Common issues caused by development are the non-use of labels in form
        elements, missing descriptive alternative text for images, links and
        other non-text content, instructions, error messages, and notifications,
        lack of responsiveness and the use of CAPTCHA interfaces. notifications,
        lack of responsiveness and the use of CAPTCHA interfaces.
      </p>
      <LinkText>MORE ABOUT COMMON ISSUES FOR DEVELOPERS</LinkText>
    </Details>
    <Details title="What are common issues for designers and how to solve them?">
      <p>
        Common issues caused by design are related to insufficient font sizing
        and color contrast, relying on use of colour alone, a lack of unique
        styles for different states, lack of responsivness of elements and not
        testing with real users.
      </p>
      <LinkText>MORE ABOUT COMMON ISSUES FOR DESIGNERS</LinkText>
    </Details>
  </LearnMoreWrapper>
);

export default LearnMoreQuestions;
