"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 px-4 md:px-8 py-4 flex items-center justify-between font-serif text-white" data-aos="fade-down" data-aos-duration="3000">
      <div className="flex items-center space-x-4">
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="font-bold text-xl tracking-wide">ShopeZone.pk</div>
      </div>
      <ul
        className={`${
          isMenuOpen
            ? "absolute left-0 top-16 w-full bg-indigo-700 shadow-lg"
            : "hidden"
        } md:flex md:static md:w-auto space-y-2 md:space-y-0 md:space-x-8 text-base font-medium`}
      >
        <Link href="/">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-indigo-300">
            Home
          </li>
        </Link>
        <Link href="/products">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-indigo-300">
            Products
          </li>
        </Link>
        <Link href="/contact">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-indigo-300">
            Contact
          </li>
        </Link>
      </ul>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-[400px] mr-12">
          <FiSearch className="text-indigo-600 text-lg mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent focus:outline-none text-sm placeholder-indigo-600"
          />
        </div>
        <FiShoppingCart className="text-2xl cursor-pointer" />
        <FiUser className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
