import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Members:</h1>
      <ol>
        <li>Harith - CEO & Operations</li>
        <li>Abdullah - Graphics & Social</li>
        <li>Abdull-razak Twaha - Developer % CTO</li>
      </ol>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
