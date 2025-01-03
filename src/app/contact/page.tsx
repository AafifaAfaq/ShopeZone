/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-white text-gray-800 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-800">Get in Touch with ShopeZone</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Have questions or need assistance with your order? Reach out to ShopeZone, and we'll get back to you as soon as possible!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we assist you with your order?"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg transition duration-300">
                Send Message
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-300 text-center">
              <p className="leading-normal my-5 text-gray-600">
                Have any urgent inquiries? Email us at:
              </p>
              <a className="text-indigo-500 font-semibold hover:underline" href="mailto:support@shopezone.com">
                support@shopezone.com
              </a>
              <p className="leading-normal my-5">
                <span>ShopeZone</span>
                <br />
                Your one-stop shop for the latest products at amazing prices.
              </p>
              <span className="inline-flex space-x-4">
                <a
                  className="text-gray-600 hover:text-indigo-400"
                  href="#"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  className="text-gray-600 hover:text-indigo-400"
                  href="#"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  className="text-gray-600 hover:text-indigo-400"
                  href="#"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  className="text-gray-600 hover:text-indigo-400"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
