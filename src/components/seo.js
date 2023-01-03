import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Seo = ({ pageTitle }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <title>
        {pageTitle} | {title}
      </title>
      <meta name="description" content={description} />
    </>
  );
};

export default Seo;
