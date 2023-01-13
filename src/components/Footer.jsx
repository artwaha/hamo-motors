import React from "react";

const Footer = ({ author, company }) => {
  return (
    <footer className='className="mt-4 p-4 bg-black text-gray-400 flex justify-center items-center"'>
      <p className="text-center font-mono">
        Copyright © {new Date().getFullYear()} by{" "}
        <span className="hover:underline hover:text-hamo_yellow cursor-pointer">
          {company}
        </span>
        . All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
