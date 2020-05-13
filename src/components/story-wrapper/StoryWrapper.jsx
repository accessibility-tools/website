import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;

  & > * {
    margin: 1rem;
  }

`

export const StoryWrapper = ({children}) => { 
  return (
    <Layout>
      {children}
    </Layout>
  )
}