import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Seo = ({ pageTitle, pageDescription }) => {
  const { title, description } = useSiteMetadata();

  const seo = {
    title: pageTitle !== undefined ? `${pageTitle} | ${title}` : title,
    description: pageDescription || description,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </>
  );
};

export default Seo;
