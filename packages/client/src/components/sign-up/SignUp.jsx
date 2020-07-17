import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { color } from '../../shared/style';
import Stack from '../layout-components/Stack';
import Center from '../layout-components/Center';
import TextInput from '../text-input/TextInput';
import Button from '../button/Button';

const SignUpBtn = styled(Button)`
  margin-left: auto;
  width: -webkit-fill-available;
  width: -moz-available;

  @media (min-width: 48rem) {
    width: 19rem;
  }
`;

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { pathname } = Router;
    if (pathname === '/') {
      Router.push('/signup');
    }
  };
  return (
    <Stack space="large">
      <Center>
        <h2>Get notified when new tools are released</h2>
      </Center>
      <Center>
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              type="email"
              id="email"
              label="email"
              placeholder="email@futurice.com"
              hintIcon="manicule"
              hintText="We will not contact you for any other purpose than newly released tools. No spam. We promise."
              iconColor={color.blue}
            />

            <SignUpBtn type="submit" text="Sign Up" data-type="cta-btn" />
          </Stack>
        </form>
      </Center>
    </Stack>
  );
};
export default SignUp;
