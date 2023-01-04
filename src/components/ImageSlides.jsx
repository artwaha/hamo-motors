import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const ImageSlides = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const nodes = data.allFile.nodes;

  return (
    <>
      <Carousel>
        {nodes.map((node, i) => (
          <Carousel.Item key={i}>
            <GatsbyImage
              className="block w-full"
              alt={`Slide ${i + 1}`}
              image={node.childImageSharp.gatsbyImageData}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ImageSlides;