import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import FooterLogo from "./footer.logo";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-10">
      <div className="w-[95%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-gray-700">
        {/* Left Section: Newsletter Signup */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Stay in the Loop 📬
          </h2>
          <p className="mb-4">
            Get Mailmate updates delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 w-full sm:w-[60%] px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 px-6 py-2 text-white rounded-r-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
          <p className="text-xs mt-3 text-gray-400">
            By subscribing, you agree to our{" "}
            <Link href="/privacy" className="underline hover:text-blue-400">
              Privacy Policy
            </Link>{" "}
            and consent to receive updates.
          </p>
        </div>

        {/* Right Section: Add brand logo or quick links later */}
        <div className="flex justify-center md:justify-end items-center">
          <FooterLogo />
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="w-[95%] max-w-6xl mx-auto py-5 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400 mb-2 md:mb-0">
          Made with 🤍 by Aviral Srivastava
        </p>
        <a
          href="https://github.com/meaviral17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white transition"
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
