import React from 'react';
import styled from 'styled-components';

import Details from '../details/Details';
import Stack from '../layout-components/Stack';
import Link from '../links/Link';

const LearnMoreWrapper = styled(Stack)`
  flex: 2;

  p {
    line-height: 24px;
    font-size: 18px;
  }
  ul {
    padding-left: 1.75em;
  }
  ul li {
    list-style: disc;
    list-style-position: outside;
    
    padding-left: 1em;
    font-size: 12px;
  }
  li span {
    font-size: 18px;
    vertical-align: middle;
  }
  a {
    display: block;
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
        Web accessibility ensures every user can properly use a product regardless
        of ability, context or situation. This includes users with permanent
        disabilities like blindness, cognitive disabilities or motor disabilities.
        But it also includes users who face contextual or temporary disabilities,
        like a broken arm or using a phone while being blinded by bright sunlight.
        <br/>
        Accessibility is a process and a set of practices.
      </p>
      <ul>
        <li>
          <span>A common example of accessibility as a practice for designers is to make sure they use a high enough color contrast so
            that it can be perceived by everybody.</span>
        </li>
        <li>
          <span>A common example to include accessibility into the process of developers is to include tools like ours to their stack,
            to track and limit accessibility issues.</span>
        </li>
      </ul>
      <Link
        text="more about web accessibility"
        icon="extLink"
        url="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
        isSecondary={true}
      />
    </Details>
    <Details title="Why should we care about accessibility?">
      <p>
        By implementing accessible practices, we act in the best interest of all
        communities. People with diverse abilities can use an interface in
        various contexts. Let’s make sure that we do not create barriers,
        that will exclude users and prevent them from using digital products.
      </p>
      <Link
        text="more about why accessibility matters"
        icon="extLink"
        url="https://a11y-101.com/"
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
        <li><span>Low text contrast</span></li>
        <li><span>Missing alternative text for images</span></li>
        <li><span>Empty links</span></li>
        <li><span>Missing form input labels</span></li>
        <li><span>Empty button</span></li>
        <li><span>Missing document language</span></li>
      </ul>
      <p>
        Making sure that all those issues are not present in your product will
        already make them much more accessible. Our tools can help you detect
        if those issues are present or not.
      </p>
      <Link
        text="read the webaim survey summary"
        icon="extLink"
        url="https://webaim.org/projects/million/"
        isSecondary={true}
      />
    </Details>
    <Details title="What is web accessibility compliance?">
      <p>
        Guidelines that describes good practices for web accessibility exist.
        They are edited by the Web Accessibility Initiative (WAI) and are called
        Web Content Accessibility Guidelines (WCAG). Several versions have been
        published. The most up-to-date is WCAG 2.1.<br/>
        The guidelines are divided in 3 different levels: A, AA and AAA.
        The compliance of digital products can be assessed against those
        different levels. Regulations in various countries of the world are
        based on those guidelines, and especially the AA level of compliance.
        Aiming for this level of compliance can also be a good first objective
        to improve the accessibility on your digital product.
      </p>
      <Link
        text="browse WCAG 2.1 guidelines"
        icon="extLink"
        url="https://www.w3.org/TR/WCAG21/"
        isSecondary={true}
      />
    </Details>
  </LearnMoreWrapper>
);

export default LearnMoreQuestions;
