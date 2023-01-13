import React from "react";
import ImageSlides from "./ImageSlides";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="font-roboto">
      <Navbar />
      <ImageSlides />
    </header>
  );
  };

export default Header;
