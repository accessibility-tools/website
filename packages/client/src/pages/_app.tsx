import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle } from "../shared/global";
import Layout from "../components/layout-components/Layout";
import { withApollo } from '../apollo/apollo';

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

export default withApollo({ ssr: false })(App);

// import React from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import Layout from '../components/Layout';
// import gql from 'graphql-tag';
// import { withApollo } from '../apollo/apollo';
//
// const QUERY = gql`
//   query GetHello {
//     hello
//   }
// `;
//
// const NOSSR = () => {
//   const { data, loading, error, refetch } = useQuery(QUERY);
//
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//
//   return (
//     <Layout>
//       <h1>This should be rendered on client side</h1>
//       <pre>Data: {data.hello}</pre>
//       <button onClick={() => refetch()}>Refetch</button>
//     </Layout>
//   );
// };
//
// export default withApollo({ ssr: false })(NOSSR);
