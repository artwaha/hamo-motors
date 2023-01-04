import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { title, author, company } = useSiteMetadata();

  return (
    <div className="border-4 border-dotted border-green-500 min-h-screen flex flex-col">
      <Header title={title} />
      <main className="flex-1 flex justify-center items-center">
        {children}
      </main>
      <Footer author={author} company={company} />
    </div>
  );
};

export default Layout;
