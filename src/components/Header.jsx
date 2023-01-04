import { Link } from "gatsby";
import React from "react";
import ImageSlides from "./ImageSlides";

const Header = () => {
  return (
    <header className="p-6">
      <div className="max-w-screen-lg m-auto ">
        <div className=" flex justify-between">
          <div>Hamo-Motors-Logo</div>
          <nav>
            <ul className="flex">
              <li className="pr-8">
                <Link to="#">Home</Link>
              </li>
              <li className="pr-8">
                <Link to="#">Services</Link>
              </li>
              <li className="pr-8">
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <ImageSlides />
      </div>
    </header>
  );
};

export default Header;
