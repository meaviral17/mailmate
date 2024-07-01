import Link from "next/link";
import React from "react";
import { FaGithub } from 'react-icons/fa';
import FooterLogo from "./footer.logo";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-10">
      <div className="w-[95%] md:flex m-auto py-5">
        <div className="w-full md:w-[40%]">
          <p className="text-2xl py-2">
            Get Mailmate updates delivered directly to your inbox.
          </p>
          <div className="flex items-center w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="bg-transparent w-full md:w-[50%] border h-[42px] px-2 rounded rounded-r-[0] outline-none"
            />
            <button className="w-[90px] cursor-pointer rounded-r h-[43px] bg-blue-500 text-xl outline-none">
              submit
            </button>
          </div>
          <br />
          <p className="text-xs">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[95%] m-auto py-5 border-t border-gray-700">
        <div className="flex items-center">
          <p className="text-lg text-center">
            Made with 🤍 by Aviral Srivastava
          </p>
          <a href="https://github.com/meaviral17" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 bg-gray-800 rounded ml-4">
            <FaGithub className="text-white mr-2" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
