import React from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";
import TextInput from "../text-input/TextInput";
import Button from "../button/Button";

const SignUpBtn = styled(Button)`
  margin-left: auto;
  width: -webkit-fill-available;

  @media (min-width: 48rem) {
    width: 19rem;
  }
`;

const SignUp = () => (
  <Stack space="large">
    <Center>
      <h2>Sign up to be notified for the release</h2>
    </Center>
    <Center>
      <Stack>
        <TextInput
          id="email"
          label="email"
          placeholder="email@futurice.com"
          hintIcon="manicule"
          hintText="Your e-mail will not be used for any other purposes. No spam. We promise."
          iconColor={color.blue}
        />
        <SignUpBtn text="Sign Up" />
      </Stack>
    </Center>
  </Stack>
);

export default SignUp;
