import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <span className="text-4xl text-purple-700 uppercase">
        Contents go here!!!!
      </span>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo pageTitle="Home" />;
