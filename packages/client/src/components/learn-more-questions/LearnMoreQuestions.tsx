import React from 'react';
import styled from 'styled-components';

import Details from '../details/Details';
import Stack from '../layout-components/Stack';
import Link from '../links/Link';

const LearnMoreWrapper = styled(Stack)`
  flex: 2;

  p {
    line-height: 1.33;
  }

  li {
    list-style: disc;
    list-style-position: inside;
  }
`;

const LearnMoreQuestions: React.FC = () => (
  <LearnMoreWrapper>
    <Details title="What is web accessibility?">
      <p>
        &quot;It’s not just about disabled users being able to access your
        website — it’s about everyone being able to access your website.&quot; -
        Thomas Trenton
      </p>
      <p>
        Web accessibility is a process and a set of practices that ensure
        everyone have at least an equitable way to properly use a product
        regardless of ability, context or situation. A common example of
        accessibility as a process for developers is to include tools like ours
        to their stack, to track and limit accessibility issues. A common
        example of accessibility as a practice for designers is to make sure
        they use a high enough color contrast on the content they create so that
        it can be perceived by everybody.
      </p>
      <Link
        text="more about web accessibility"
        icon="extLink"
        url="/"
        isSecondary={true}
      />
    </Details>
    <Details title="Why should we care about accessibility?">
      <p>
        By implementing accessible practices, we act in the best interest of all
        communities. People use an interface in various contexts. Let’s make
        sure that those contexts doesn’t become a blocker for using and getting
        valuable experience out of the products we build.
      </p>
      <Link
        text="more about why accessibility matters"
        icon="extLink"
        url="/"
        isSecondary={true}
      />
    </Details>
    <Details title="How to start building accessible digital products?">
      <p>
        Just like other web practices, it requires time and experience to become
        more inclusive in the way we build digital products. But a good first
        step is to learn more about the most common accessibility issues.
        According to the WebAIM, those are:
      </p>
      <ul>
        <li>Low text contrast</li>
        <li>Missing alternative text for images</li>
        <li>Empty links</li>
        <li>Missing form input labels</li>
        <li>Empty button</li>
        <li>Missing document language</li>
        <p>
          Making sure that all those issues are not present in your product will
          already make them much more accessible. Our tools can help you detect
          if those issues are present or not.
        </p>
      </ul>
      <Link
        text="read the webaim survey summary"
        icon="extLink"
        url="/"
        isSecondary={true}
      />
    </Details>
    <Details title="What is web accessibility compliance?">
      <p>
        Guidelines that describes good practices for web accessibility exist.
        They are edited by the Web Accessibility Initiative (WAI) and are called
        Web Content Accessibility Guidelines (WCAG). Several versions have been
        published. The most up-to-date is WCAG 2.1. The guidelines are divided
        in 3 different levels: A, AA and AAA. The compliance of digital products
        can be assessed against those different levels. Regulations in various
        countries of the world are based on those guidelines, and especially the
        AA level of compliance. Aiming for this level of compliance can also be
        a good first objective to improve the accessibility on your digital
        product.
      </p>
      <Link
        text="browse WCAG 2.1 guidelines"
        icon="extLink"
        url="/"
        isSecondary={true}
      />
    </Details>
  </LearnMoreWrapper>
);

export default LearnMoreQuestions;
