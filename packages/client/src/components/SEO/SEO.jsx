import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

//TODO: Add other SEO-related tags to this component

const SEO = ({ siteTitle }) => (
  <Head>
    <title>{siteTitle}</title>
  </Head>
);

SEO.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default SEO;
