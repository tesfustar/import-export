import React from "react";
import { Link } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { GrFacebookOption, GrYoutube, GrLinkedinOption } from "react-icons/gr";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import Logo from "../assets/logo-white.png";
import { BsTelegram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#0f4c5c] p-5">
      <div className="max-w-6xl mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        <div className="flex flex-col items-start space-y-3">
          <img src={Logo} alt="" className="h-16" />
          <p className="text-sm max-w-xs text-dark-gray">
            Work with the best in the business. Contact us for any information
          </p>
          <div className="flex items-center space-x-2">
            <div
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100087041719432"
                )
              }
              className="bg-[#e36414] hover:bg-secondary-bg cursor-pointer transition-all ease-out duration-500 p-2 rounded-full"
            >
              <GrFacebookOption className="text-gray-300" />
            </div>
            <div
              onClick={() =>
                window.open("https://www.instagram.com/tk_export/")
              }
              className="bg-[#e36414] hover:bg-secondary-bg cursor-pointer transition-all ease-out duration-500 p-2 rounded-full"
            >
              <AiFillInstagram className="text-gray-300" />
            </div>
            <div
              onClick={() => window.open("https://t.me/tk_trading")}
              className="bg-[#e36414] hover:bg-secondary-bg cursor-pointer transition-all ease-out duration-500 p-2 rounded-full"
            >
              <BsTelegram className="text-gray-300" />
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/tesfaw-kelemu-trading"
                )
              }
              className="bg-[#e36414] hover:bg-secondary-bg cursor-pointer transition-all ease-out duration-500 p-2 rounded-full"
            >
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
                    Meskel Flower, Jeme'a BLDG 9th floor Addis Ababa Ethiopia
                  </p>
                </div>
              </div>
              {/* email */}
              <div className="flex items-start space-x-2">
                <IoLogoTwitter size={22} className="text-[#e36414]" />
                <div className="flex flex-col items-start ">
                  <p className="font-medium text-gray-300">Email</p>
                  <p className="text-sm text-gray-400">
                    tkimportandexport@gmail.com
                  </p>
                </div>
              </div>
              {/* phone */}
              <div className="flex items-start space-x-2">
                <BiPhoneCall size={22} className="text-[#e36414]" />
                <div className="flex flex-col items-start ">
                  <p className="font-medium text-gray-300">Phone</p>
                  <p className="text-sm text-gray-400">
                    251-907444777 , 251-907444488
                  </p>
                  <p className="text-sm text-gray-400">0111-471-3134</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:items-start  md:justify-between flex-wrap border-t border-dark-gray py-2">
        <p className="text-[13px] text-center  text-dark-gray">
          copyright <span className="text-white">© Tesfaw Kelemu</span> | All
          right reserved
        </p>
        <p className="text-[13px] text-dark-gray">
          2022 <span className="text-white">© Powered by Jaktech.et </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
