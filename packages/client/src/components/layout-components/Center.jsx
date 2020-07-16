// The Center-pattern from https://every-layout.dev/

import styled from "styled-components";

const Center = styled.div`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

export default Center;
