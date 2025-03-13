/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import BrandIcon from "./BrandIcon";
// import Button from "../elements/Button";

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10">
          {/* Column 1: Brand Info */}
          <div className="sm:w-1/3 w-full">
            <BrandIcon />
            <p className="text-lg text-gray-500 font-light mt-2">
              Growing Your Business <br /> Is Our Calling
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="sm:w-1/3 w-full">
            <h1 className="text-lg text-theme-blue font-semibold">Contact</h1>
            <p className="text-lg text-gray-500 font-light mt-1">Shwathy</p>
            <p className="text-lg text-gray-500 font-light">93609 71636</p>
            <p className="text-lg text-gray-500 font-light">
              Tamil Nadu, India - 612001
            </p>
          </div>

          {/* Column 3: Social Links */}
          <div className="sm:w-1/3 w-full">
            <h1 className="text-lg text-theme-blue font-semibold">Social</h1>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="https://www.instagram.com/theglobemyd_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-light hover:underline bg-clip-text text-transparent 
                       bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/thenmozhi-t/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-light hover:underline bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-500 to-blue-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2025 - All rights reserved - The Globe MYD
          </p>
        </div>
      </div>
    </div>
  );
}
