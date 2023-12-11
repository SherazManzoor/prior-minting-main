import React from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <Header>
      {children}
      <Footer />
    </Header>
  );
};

export default Layout;
