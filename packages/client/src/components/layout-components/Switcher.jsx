// The Switcher-pattern from https://every-layout.dev/

import styled from 'styled-components';

const Switcher = styled.div`
  --threshold: ${({ threshold }) => (threshold ? threshold : '25rem')};
  --switcher-space: ${({ space }) => (space ? space : '2rem')};
  width: ${({ width }) => (width ? width : '100%')};

  & > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--switcher-space) / 2 * -1);
  }

  & > * > * {
    flex-grow: 1;
    flex-basis: calc((var(--threshold) - (100% - var(--switcher-space))) * 999);
    margin: calc(var(--switcher-space) / 2);
  }
`;

export default Switcher;
