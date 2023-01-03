import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Footer from "./Footer";
import Header from "./header";

const Layout = ({ children }) => {
  const { title, author, company } = useSiteMetadata();

  return (
    <>
      <Header title={title} />
      <main>{children}</main>
      <Footer author={author} company={company} />
    </>
  );
};

export default Layout;
