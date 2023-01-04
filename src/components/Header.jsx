import { Link } from "gatsby";
import React from "react";

const Header = () => {
  return (
    <header className="b-red p-6">
      <div className=" flex justify-between max-w-screen-lg m-auto b-purple p-3">
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
    </header>
  );
};

export default Header;
