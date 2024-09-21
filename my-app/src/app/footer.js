import * as React from "react";
import { LOGO_LINK } from "./navbar";
import Link from "next/link";
import Image from "next/image";
function NavBarItem({ children }) {
  return (
    <div className="box-border relative shrink-0 my-auto mr-auto h-auto text-center">
      {children}
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className=" box-border relative shrink-0 my-auto mr-auto h-auto text-center cursor-pointer pointer-events-auto"
    >
      {children}
    </a>
  );
}

function MyComponent() {
  return (
    <footer className="border-t border-t-[#FF204E] pb-8">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 pt-4 justify-evenly">
        <Link className="flex flex-row w-full md:w-1/3 items-center" href="/">
          <div>
            <img
              loading="lazy"
              src={LOGO_LINK}
              alt=""
              className="max-w-20 rounded-lg"
            />
          </div>
          <div className="ml-2">
            <p>KoneKhmer</p>
          </div>
        </Link>
        <div className="w-full md:w-1/3 flex flex-col justify-center md:justify-start">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/resources">Resources</NavLink>
        </div>
        <div className="">
          <h5 className="text-center">Follow Us</h5>
          <div className="flex flex-row space-x-2.5">
            <Link href="https://www.facebook.com/highereducationdreamers">
              <Image
                loading="lazy"
                src={require("../../public/photos/facebook.png")}
                width={35}
                alt=""
                className="cursor-pointer "
              />
            </Link>
            <Link href="https://www.facebook.com/highereducationdreamers">
              <Image
                loading="lazy"
                src={require("../../public/photos/youtube.png")}
                width={35}
                alt=""
                className="cursor-pointer"
              />
            </Link>
            <Link href="https://www.facebook.com/highereducationdreamers">
              <Image
                loading="lazy"
                src={require("../../public/photos/instagram.png")}
                width={35}
                alt=""
                className="cursor-pointer"
              />
            </Link>
               
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyComponent;
