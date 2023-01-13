import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-gray-200">
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg max-w-screen-lg m-auto">
        <div>
          <Link to="#">
            <StaticImage
              alt="logo"
              src="../images/logo.svg"
              className="object-contain"
              width={100}
              height={50}
            />
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            document.querySelector("#menu").classList.toggle("hidden");
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 px-0">
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-hamo_yellow hover:underline no-underline text-gray-700"
                to="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-hamo_yellow hover:underline no-underline text-gray-700"
                to="#"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-hamo_yellow hover:underline no-underline text-gray-700"
                to="#"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-hamo_yellow hover:underline  no-underline text-gray-700"
                to="#"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
