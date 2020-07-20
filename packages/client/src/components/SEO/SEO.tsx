import React from 'react';
import Head from 'next/head';

import { ISEO } from './types';

//TODO: Add other SEO-related tags to this component

const SEO: React.FC<ISEO> = ({ siteTitle }) => (
  <Head>
    <title>{siteTitle}</title>
  </Head>
);

export default SEO;
