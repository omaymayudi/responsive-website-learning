// import { NavLink } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

// import { useLocation } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  // const pathName = useLocation();
  const [open, setOpen] = useState(false);
  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const sosmed = [
    {
      name: <FaGithub />,
      path: "/github",
    },
    {
      name: <FaXTwitter />,
      path: "/twitter",
    },
    {
      name: <FaLinkedin />,
      path: "/linkedin",
    },
    {
      name: <FaInstagram />,
      path: "/instagram",
    },
  ];

  return (
    <nav>
      <div className="container mx-auto ">
        {/* Mobile */}
        {open ? (
          <>
            <div className="fixed w-full h-full bg-white trasnsition-all">
              <div className="flex justify-end py-2 px-2">
                <button onClick={() => setOpen(false)}>
                  <span className="text-2xl">
                    <IoCloseSharp />
                  </span>
                </button>
              </div>
              <NavLink className="flex justify-center items-center my-11">
                <img
                  className="w-6 h-6 md:w-10 md:h-10 rounded-full"
                  src="/avatar.png"
                  alt=""
                />
                <span className="pl-2 font-semibold leading-[160%] text-text">
                  It’s me
                </span>
              </NavLink>
              <div className="md:hidden block w-full bg-white fixed justify-center mx-auto">
                <ul className="flex flex-col text-sm gap-11 leading-[160%]">
                  {menus.map((menu, index) => (
                    <li className=" flex justify-center" key={index}>
                      <NavLink to={menu.path}>{menu.name}</NavLink>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center my-28 h-12">
                  <button className="bg-brand text-white text-sm rounded-3xl px-6 py- leading-[160%]">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}

        <div className="flex mx-4 justify-between md:py-4 md:px-12 h-[66px] md:h-[88px] items-center xl:max-w-7xl md:max-w-3xl">
          <div className="flex items-center w-4/12 md:w-[486px] md:h-14 ">
            <NavLink className="flex items-center">
              <img
                className="w-6 h-6 md:w-10 md:h-10 rounded-full"
                src="/avatar.png"
                alt=""
              />
              <span className="pl-2 font-semibold leading-[160%] text-text">
                It’s me
              </span>
            </NavLink>
            <div className="hidden md:block ml-8">
              <ul className="flex text-sm space-x-8 leading-[160%] ">
                {menus.map((menu, index) => (
                  <li key={index}>
                    <NavLink to={menu.path}>{menu.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-8/12 md:w-[386px] flex items-center justify-end ">
            <div className="hidden lg:block">
              <ul className="flex text-2xl space-x-8 leading-[160%] md:mr-6">
                {sosmed.map((sosmed, index) => (
                  <li key={index}>
                    <NavLink to={sosmed.path}>{sosmed.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pr-3">
              <button className="ring-2 ring-brand text-sm rounded-3xl px-6 py-2 leading-[160%]">
                Download CV
              </button>
            </div>
            <div className="w-10 h-10 flex justify-center items-center md:hidden">
              <button onClick={() => setOpen(!open)}>
                <span className="text-2xl">
                  <CiMenuBurger />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
