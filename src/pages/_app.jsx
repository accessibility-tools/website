import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle } from "../shared/global";
import Layout from "../components/layout-components/Layout";


const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any,
};

export default App;
