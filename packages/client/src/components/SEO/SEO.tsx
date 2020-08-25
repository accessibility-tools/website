import React from 'react';
import Head from 'next/head';

import { ISEO } from './types';

//TODO: Add other SEO-related tags to this component

const SEO: React.FC<ISEO> = ({ siteTitle }) => (
  <Head>
    <link rel="icon" type="image/x-icon" href="/favicon-16x16.ico" sizes="16x16" />
    <link rel="icon" type="image/x-icon" href="/favicon-32x32.ico" sizes="32x32" />
    <link rel="apple-touch-icon" href="/favicon-32x32.png" />
    <title>{siteTitle}</title>
  </Head>
);

export default SEO;
