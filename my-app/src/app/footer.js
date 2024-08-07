import * as React from "react";

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
    <footer className="border-t-4 border-t-[#FF204E] pb-8">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 pt-4 justify-evenly">
        <div className="flex flex-row w-full md:w-1/3 items-center ">
          <div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
              alt=""
              className="max-w-20"
            />
          </div>
          <div className="ml-2">
            <p>KoneKhmer</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center md:justify-start">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/resources">Resources</NavLink>
        </div>
        <div className="w-full md:w-1/3 flex flex-col">
          <div>Follow Us</div>
          <div className="flex flex-row">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
              alt=""
              className="max-w-20"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
              alt=""
              className="max-w-20 pl-4"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyComponent;
