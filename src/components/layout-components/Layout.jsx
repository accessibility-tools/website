import React from "react";
import PropTypes from "prop-types";
import Nav from "../navigation/Nav";
import Footer from "../footer/Footer";

const Layout = ({ children }) => (
  <div>
    <header>
      <Nav />
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default Layout;
