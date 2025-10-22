import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto">
        <a href="https://instagram.com/dionwangsa" target="_blank">
          <p className="flex items-center justify-center gap-x-1">
            <span>
              <FaRegCopyright />
            </span>
            2025 Dion. All rights reserved.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
