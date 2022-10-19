import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo.png";
import Sidebar from "./Sidebar";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <div className="bg-[#0f4c5c] p-2 ">
        <div className="max-w-xl pl-0 md:pl-5 flex items-center justify-center md:justify-start w-full space-x-2 ">
          <p className="text-white text-sm">admin@gmail.com</p>
          <div className="bg-[#fff] h-6 w-[2px] " />
          <p className="text-white text-sm">251977885522</p>
        </div>
      </div>
      <header className="bg-white p-3 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/home">
            <img src={Logo} alt="" className="h-16" />
          </Link>

          <div className="flex items-center space-x-5 lg:space-x-10">
            <div className="hidden md:flex items-center space-x-5">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? `text-secondary-color font-semibold`
                    : `font-semibold text-dark-color hover:text-[#e36414]  transition-all duration-500`
                }
              >
                HOME
              </NavLink>

              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<BiChevronRight />}
                  fontWeight={"semibold"}
                  backgroundColor={"white"}
                  _hover={{backgroundColor:'white'}}
                >
                  SERVICES
                </MenuButton>
                <MenuList zIndex={1000}>
                  <MenuItem onClick={() => navigate("/import/1")}>
                    Import
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/export/2")}>
                    Export
                  </MenuItem>
                </MenuList>
              </Menu>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `text-secondary-color font-semibold`
                    : `font-semibold text-dark-color hover:text-[#e36414]  transition-all duration-500`
                }
              >
                ABOUT
              </NavLink>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="bg-main-bg text-white font-medium rounded-sm hover:bg-[#e36414]  p-2"
            >
              Contact Us
            </button>
            <div
              className="bg-main-color flex md:hidden rounded-sm p-2 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <FaBars className="text-white" size={20} />
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
