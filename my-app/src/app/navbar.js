"use client";

import Link from "next/link";
import React, { useState } from "react";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 1, text: "Home", ref:"/"},
    { id: 2, text: "About", ref:"/about" },
    { id: 3, text: "Resources",ref:"/blogs" },
    { id: 4, text: "Contact Us",ref:"/contact" },
  ];

  return (
    <nav className="bg-[#00224D] border-b-4 border-b-[#FF204E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-semibold">KoneKhmer</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  href={item.ref}
                  class="text-gray-300 hover:bg-[#FF204E] hover:text-white px-3 py-2 rounded-md text-sm font-medium hidden md:inline"
                  key={item.id}
                >
        
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
                <a
                  href={item.link}
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  key={item.id}
                >
                  {item.text}
                </a>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
}
