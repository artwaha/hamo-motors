import React from "react";

const Footer = ({ author, company }) => {
  return (
    <footer className="">
      <div className="block text-center max-w-screen-lg m-auto">
        <div>
          Logo <span className="border-b border-orange-700">{company}</span>
        </div>
        <div>
          <ul className="flex justify-center">
            <li className="text-green-400 pr-4">Twitter Icon</li>
            <li className=" text-black pr-4">Instagram Icon</li>
            <li className=" text-purple-700 pr-4">Facebook Icon</li>
          </ul>
        </div>
        <div>
          <p>
            Created by{" "}
            <span className="border-b border-orange-700">{author}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
