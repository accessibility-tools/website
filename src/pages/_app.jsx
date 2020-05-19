import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle } from "../shared/global";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any,
};

export default App;
