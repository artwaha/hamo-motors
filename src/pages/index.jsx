import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <span className="text-6xl text-amber-800">Content!!!!</span>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
