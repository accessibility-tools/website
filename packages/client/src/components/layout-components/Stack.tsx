// The Stack-pattern from https://every-layout.dev/
import styled from 'styled-components';

import { IStack } from './types';

const spacing = {
  small: '1rem',
  medium: '3rem',
  large: '5rem',
  extraLarge: '8rem'
};

const Stack = styled.div<IStack>`
  --stack-space: ${({ space }) => (space ? spacing[space] : '2rem')};
  width: ${({ width }) => (width ? width : '100%')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ itemsAlign }) => itemsAlign && 'center'};

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: var(--stack-space);
  }

  @media (max-width: 48rem) {
    align-items: center;
  }
`;

export default Stack;
