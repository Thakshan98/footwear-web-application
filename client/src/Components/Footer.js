import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 pt-16 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
            <div className="md:col-span-1 space-y-8 md:mr-4">
              <span className="text-lg font-semibold text-white w-30">
                PHOENIX
              </span>
              <p className="text-white text-sm leading-loose font-popins tracking-wider">
                Just name your peers directly in your markup and Tailwind will
                automatically generate the necessary CSS.
              </p>
              <div className="flex space-x-6">
                <a href="/" className="text-gray-400">
                  <FaFacebookSquare />
                </a>
                <a href="/" className="text-gray-400">
                  <FaTwitterSquare />
                </a>
                <a href="/" className="text-gray-400">
                  <FaInstagramSquare />
                </a>
                <a href="/" className="text-gray-400">
                  <FaGithubSquare />
                </a>
                <a href="/" className="text-gray-400">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Solution
                </h3>
                <div className="mt-4 space-y-4 font-roboto">
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Marketing
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Analytics
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Commerce
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Insights
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4 font-roboto">
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Pricing
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Documentation
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Guides
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    API Status
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Company
                </h3>
                <div className="mt-4 space-y-4 font-roboto">
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    About
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Blog
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Jobs
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Partners
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Legal
                </h3>
                <div className="mt-4 space-y-4 font-roboto">
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Claim
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Privacy
                  </a>
                  <a
                    href="/"
                    className="text-base text-white block no-underline"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-500" />
          <div className="pt-4 mx-auto">
            <p className="text-white text-sm font-roboto text-center racking-wider">
              &copy; 2023 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
