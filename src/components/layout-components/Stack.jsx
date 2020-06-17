// The Stack-pattern from https://every-layout.dev/

import styled from "styled-components";

const spacing = {
  small: "1rem",
  medium: "2rem",
  large: "3.5rem",
};

const Stack = styled.div`
  --stack-space: ${({ space }) => (space ? spacing[space] : "2rem")};
  width: ${({ width }) => width && width};
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

export default Stack;
