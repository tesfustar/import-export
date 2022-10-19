import React from "react";
import { Link } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";
import {BiMap,BiPhoneCall} from 'react-icons/bi'
import { GrFacebookOption, GrYoutube, GrLinkedinOption } from "react-icons/gr";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import Logo from "../assets/logo-white.png";
import {AiOutlineMail} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="bg-[#0f4c5c] p-5">
      <div className="max-w-6xl mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        <div className="flex flex-col items-start space-y-3">
          <img
            src={Logo}
            alt=""
            className="h-16"
          />
          <p className="text-sm max-w-xs text-dark-gray">
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            ut labore et dolore magna aliqua. Quis facilisis.
          </p>
          <div className="flex items-center space-x-2">
            <div className="bg-[#e36414] hover:bg-secondary-bg cursor-pointer transition-all ease-out duration-500 p-2 rounded-full">
              <GrFacebookOption className="text-gray-300" />
            </div>
            <div className="bg-[#e36414] hover:bg-secondary-bg cursor-pointer transition-all ease-out duration-500 p-2 rounded-full">
              <IoLogoTwitter className="text-gray-300" />
            </div>
            <div className="bg-[#e36414] hover:bg-secondary-bg cursor-pointer transition-all ease-out duration-500 p-2 rounded-full">
              <GrYoutube className="text-gray-300" />
            </div>
            <div className="bg-[#e36414] hover:bg-secondary-bg cursor-pointer transition-all ease-out duration-500 p-2 rounded-full">
              <GrLinkedinOption className="text-gray-300" />
            </div>
          </div>
        </div>

        {/* quick links */}
        <div className="flex flex-col items-start space-y-3">
          <div className="flex flex-col items-start space-y-1">
            <h1 className="text-xl text-white font-medium">QUICK LINKS</h1>
            <div className="w-16 h-[2px] bg-main-bg" />
          </div>
        <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center cursor-pointer space-x-1  text-dark-gray hover:text-[#e36414] transition-all ease-in-out duration-500">
            <BiChevronRight size={18} />
            <Link to="/" className="text-sm font-medium">
              Home
            </Link>
          </div>
          <div className="flex items-center cursor-pointer space-x-1  text-dark-gray hover:text-[#e36414] transition-all ease-in-out duration-500">
            <BiChevronRight size={18} />
            <Link to="/import/1" className="text-sm font-medium">
              Import
            </Link>
          </div>
          <div className="flex items-center cursor-pointer space-x-1  text-dark-gray hover:text-[#e36414] transition-all ease-in-out duration-500">
            <BiChevronRight size={18} />
            <Link to="/export/2" className="text-sm font-medium">
              Export
            </Link>
          </div>
          <div className="flex items-center cursor-pointer space-x-1  text-dark-gray hover:text-[#e36414] transition-all ease-in-out duration-500">
            <BiChevronRight size={18} />
            <Link to="/about" className="text-sm font-medium">
              About
            </Link>
          </div>
          <div className="flex items-center cursor-pointer space-x-1  text-dark-gray hover:text-[#e36414] transition-all ease-in-out duration-500">
            <BiChevronRight size={18} />
            <Link to="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
        </div>

        {/* contact info */}
        <div className="flex flex-col items-start space-y-3">
          <div className="flex flex-col items-start space-y-1">
            <h1 className="text-xl text-white font-medium">CONTACT INFO</h1>
            <div className="w-16 h-[2px] bg-main-bg" />
          </div>
          <div>
          <div className="flex flex-col items-start space-y-2 ">
            <div className="flex items-start space-x-2">
              <BiMap size={22} className="text-[#e36414]" />
              <div className="flex flex-col items-start ">
                <p className="font-medium text-gray-300">Address</p>
                <p className="text-sm text-gray-400">
                  Addis Ababa - Ethiopia Dembel City Center - Second Floor
                </p>
              </div>
            </div>
            {/* email */}
            <div className="flex items-start space-x-2">
              <IoLogoTwitter size={22}  className="text-[#e36414]" />
              <div className="flex flex-col items-start ">
                <p className="font-medium text-gray-300">Email</p>
                <p className="text-sm text-gray-400">
                tkimportandexport@gmail.com
                </p>
              </div>
            </div>
            {/* phone */}
            <div className="flex items-start space-x-2">
              <BiPhoneCall size={22}  className="text-[#e36414]" />
              <div className="flex flex-col items-start ">
                <p className="font-medium text-gray-300">Phone</p>
                <p className="text-sm text-gray-400">
               +251 911 830 529 ,  +251 911 580 619
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:items-start  md:justify-between flex-wrap border-t border-dark-gray py-2">
        <p className="text-[13px] text-center  text-dark-gray">
          copyright <span className="text-white">© Cargo</span> | All right
          reserved
        </p>
        <p className="text-[13px] text-dark-gray">
          2022 <span className="text-white">© Jakteck </span>| All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
