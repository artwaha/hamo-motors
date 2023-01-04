import React from "react";

const Footer = ({ author, company }) => {
  return (
    <footer className="pt-4">
      <div className="w-full max-w-screen-lg m-auto grid grid-cols-3 gap-3">
        <div>
          <h4>Links</h4>
          <ul className="p-0">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4>All Services</h4>
          <ul className="p-0">
            <li>Car Rental</li>
            <li>Brand New Cars</li>
            <li>Used Cars</li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <ul className="p-0 flex">
            <li className="text-green-400 pr-4">Twitter</li>
            <li className=" text-black pr-4">Instagram</li>
            <li className=" text-purple-700">Facebook</li>
          </ul>
        </div>
        {/* <div>
          <p>
            Created by{" "}
            <span className="border-b border-orange-700">{author}</span>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
