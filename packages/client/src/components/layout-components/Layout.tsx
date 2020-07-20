import React from 'react';

import Nav from '../navigation/Nav';
import Footer from '../footer/Footer';
import { ILayout } from './types';

const Layout: React.FC<ILayout> = ({ children }) => (
  <div>
    <header>
      <Nav />
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
