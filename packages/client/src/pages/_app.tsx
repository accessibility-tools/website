import React from 'react';

import { GlobalStyle } from '../shared/global';
import Layout from '../components/layout-components/Layout';
import { createServices, IServices, ServicesContext } from '../common/services';

const services = createServices();


interface IApp {
  Component: React.ElementType;
  pageProps: any;
  services: IServices;
}

const App: React.FC<IApp> = ({ Component, pageProps }) => {
  return (
    <>
      <ServicesContext.Provider value={services}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ServicesContext.Provider>
    </>
  );
};


export default App;
