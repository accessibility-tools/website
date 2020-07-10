// The Stack-pattern from https://every-layout.dev/

import styled from "styled-components";

const spacing = {
  small: "1rem",
  medium: "3rem",
  large: "5rem",
};

const Stack = styled.div`
  --stack-space: ${({ space }) => (space ? spacing[space] : "2rem")};
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ center }) => center && "center"};

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: var(--stack-space);
  }

  @media (max-width: 48rem) {
    align-items: center;
    text-align: center;

    & > p {
      text-align: left;
    }
  }
`;

export default Stack;
