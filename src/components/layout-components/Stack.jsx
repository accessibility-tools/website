// The Stack-pattern from https://every-layout.dev/

import styled, { css } from "styled-components";

const spacing = {
  small: "1rem",
  medium: "2rem",
  large: "3.5rem",
};

export const stackStyles = css`
  --stack-space: ${props => (props.space ? spacing[props.space] : "2rem")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: var(--stack-space);
  }
`;

const Stack = styled.div`
  ${stackStyles}
`;

export default Stack;
