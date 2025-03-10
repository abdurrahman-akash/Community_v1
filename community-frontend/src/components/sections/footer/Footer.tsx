"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className=" bg-black text-gray-300 p-12    ">
      <div className="flex justify-between pb-8 border-b border-gray-700 ">
        <div>
          <h1 className="text-2xl font-bold">MyLogo</h1>
        </div>
        <div>
          <span className="me-5  font-extrabold ">Ready to get started?</span>
          <button className="bg-violet-500 text-white px-6 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
      {/* <hr className="" /> */}
      <div className="flex justify-between mt-8">
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold  text-2xl">Subscribe to our newsletter</h2>
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="p-3 border-0  outline-none  border-gray-700 border-b focus:border-violet-600"
            />
            <button className="rounded-t-lg bg-purple-600 px-4 py-3 hover:bg-purple-700">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="flex  space-x-4 px-10">
          <div className="flex flex-col space-y-3">
            <h1 className="text-violet-600 text-xl font-bold">Help</h1>
            <div className="flex flex-col space-y-1 ">
              <a
                href="#"
                className="text-white hover:text-violet-600 transition-transform duration-200"
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-white hover:text-violet-600 transition-transform duration-200"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-white hover:text-violet-600 transition-transform duration-200"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex space-x-4">
          <a href="#" className="">Terms & Conditions</a>
          <a href="#" className="">Privacy Policy</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="rounded-full p-2 hover:scale-105 duration-200 hover:bg-violet-500"><FaFacebookF className="text-2xl" /></a>
          <a href="#" className="rounded-full p-2 hover:scale-105 duration-200 hover:bg-violet-500"><FaTwitter className="text-2xl" /></a>
          <a href="#" className="rounded-full p-2 hover:scale-105 duration-200 hover:bg-violet-500"><FaInstagram className="text-2xl" /></a>
          <a href="#" className="rounded-full p-2 hover:scale-105 duration-200 hover:bg-violet-500"><FaLinkedin className="text-2xl" /></a>
        </div>
        
      </div>
      <div className="mt-12 text-center border-t border-gray-700 pt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Tech Community BD. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
