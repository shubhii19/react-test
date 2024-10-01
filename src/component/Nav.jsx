import { Fragment } from "react";

// Nav.js
const Nav = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="flex h-full">
          {/* Left Section */}
          <div className="bg-black px-24 py-6 w-1/3 h-full text-white">
            <h1 className="text-bold text-6xl">PORTFOLIO.</h1>
          </div>

          {/* Right Section */}
          <div className="bg-zinc-600 w-2/3 h-full p-4 text-white">
            {/* Navigation Menu */}
            <nav className="w-full mb-8">
              <ul className="flex w-full text-lg font-semibold">
                <li className="flex-1 text-center">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="flex-1 text-center">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="flex-1 text-center">
                  <a href="#" className="hover:underline">
                    Work
                  </a>
                </li>
                <li className="flex-1 text-center">
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li className="flex-1 text-center">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            {/* Image Below Navigation */}
            <img
              src="https://plus.unsplash.com/premium_photo-1695531853813-b586d6ad8632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D"
              alt="Portfolio Image"
              className="w-full h-5/6 object-cover"
            />
          </div>
          <div className="absolute bottom-64 left-60 w-auto text-white text-6xl">
            I am
            <br />
            <span className=" text-white text-8xl font-bold">Bruno</span>
          </div>
          <button className="absolute bottom-52 left-60 bg-yellow-500 font-bold text-black px-4 py-2 rounded-md">
            I’m a UI Developer
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
