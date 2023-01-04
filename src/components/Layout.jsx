import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { title, author, company } = useSiteMetadata();

  return (
    <div className="min-h-screen flex flex-col">
      <Header title={title} />
      <main className="flex-1 flex justify-center items-center w-full max-w-screen-lg m-auto">
        {children}
      </main>
      <Footer author={author} company={company} />
    </div>
  );
};

export default Layout;
