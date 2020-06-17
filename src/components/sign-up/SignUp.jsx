import React from "react";
import { color } from "../../shared/style";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";
import TextInput from "../text-input/TextInput";
import Button from "../button/Button";

const SignUp = () => (
  <Stack space="large" width="100%">
    <h2>Sign up to be notified for the release</h2>
    <Center>
      <TextInput
        id="email"
        label="email"
        width={576}
        placeholder="email@futurice.com"
        hintText="Your e-mail will not be used for any other purposes. No spam. We promise."
        hintIcon="manicule"
        iconColor={color.blue}
      />
    </Center>
    <Button text="Sign Up" />
  </Stack>
);

export default SignUp;
