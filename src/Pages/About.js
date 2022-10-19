import React from "react";
import { Link, useNavigate } from "react-router-dom";
import two from "../assets/two.jpg";
import { FaHandshake } from "react-icons/fa";
import { AiFillUnlock } from "react-icons/ai";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { HiLocationMarker, HiHandThumbUp } from "react-icons/hi";

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${two})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "270px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
        <div className="absolute z-30 top-[10%]  md:top-1/4 flex flex-col items-start w-full">
          <div className="max-w-6xl mx-auto  w-full grid grid-cols-1 md:grid-cols-2 gap-3 space-y-2 p-5 ">
            <div className="flex flex-col items-start space-y-2">
              <h1 className="font-semibold text-white text-4xl">About Us</h1>
              <p className="text-dark-gray font-medium text-sm">
                <Link to="/home" className="text-secondary-color">
                  Home
                </Link>{" "}
                /About
              </p>
            </div>
            <div className="flex items-start justify-start md:items-end md:justify-end max-w-lg">
              <p className="text-white font-medium text-lg text-start md:text-end">
                We freight all over the world.The best logistics company,{" "}
                <span className="text-secondary-color">FAST</span> and{" "}
                <span className="text-secondary-color">SAFELY</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* who we are */}
      <div className="max-w-6xl mx-auto p-5 py-10 md:py-20">
        <div className="flex flex-col items-start space-y-2 w-full ">
          <div className="flex flex-col items-start w-full ">
            <h1 className="font-semibold uppercase text-2xl md:text-4xl   text-dark-color">
              Who We Are ?
            </h1>
            <div className="w-16 h-[3px] bg-main-bg" />
          </div>
          <p>
          Our company was established in Addis Ababa, Ethiopia. We have been specializing in import and export for quite some time. We import and export agricultural and non-agricultural products of all kinds. We are known for our work ethics, high-quality products, and excellent work reputation.
          </p>
        </div>
      </div>

{/* mission */}
<div className="max-w-6xl mx-auto p-5 py-10 ">
        <div className="flex flex-col items-start space-y-2 w-full ">
          <div className="flex flex-col items-start w-full ">
            <h1 className="font-semibold uppercase text-2xl md:text-4xl   text-dark-color">
              Mission
            </h1>
            <div className="w-16 h-[3px] bg-main-bg" />
          </div>
          <p>
          Exceeding our clients' expectations by supplying and transporting products obtained from the country's top farms while importing essential goods that assist our clients in achieving their objectives. Maintaining efficient and effective professional etiquette that delights and fulfills our clients.          </p>
        </div>
      </div>
      {/* vision */}
      <div className="max-w-6xl mx-auto p-5 py-10 ">
        <div className="flex flex-col items-start space-y-2 w-full ">
          <div className="flex flex-col items-start w-full ">
            <h1 className="font-semibold uppercase text-2xl md:text-4xl   text-dark-color">
              Vision
            </h1>
            <div className="w-16 h-[3px] bg-main-bg" />
          </div>
          <p>
          To be known as an East African leading producer and exporter of organic and healthy agricultural products to the global market.          </p>
        </div>
      </div>
      {/* values */}
      <div className="max-w-6xl mx-auto p-5 py-10 ">
        <div className="flex flex-col items-start space-y-2 w-full ">
          <div className="flex flex-col items-start w-full ">
            <h1 className="font-semibold uppercase text-2xl md:text-4xl   text-dark-color">
              Values
            </h1>
            <div className="w-16 h-[3px] bg-main-bg" />
          </div>
         <li>Hard work</li>
         <li>Professional etiquettes</li>
         <li>High quality products and services</li>
         <li>Excellent customer service</li>
         <li>Confidentiality</li>
        </div>
      </div>
      {/* why you choose us */}
      <div className="max-w-6xl mx-auto p-5 py-10 md:py-20 w-full">
        <div className="flex flex-col items-start space-y-5 w-full ">
          <div className="flex flex-col items-start w-full ">
            <h1 className="font-semibold uppercase text-2xl md:text-4xl   text-dark-color">
              Why You Choose Us ?
            </h1>
            <div className="w-16 h-[3px] bg-main-bg" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-main-bg p-5 rounded-full">
                <FaHandshake size={80} className="text-white" />
              </div>
              <h1 className="font-medium">We Are Trusted</h1>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-main-bg p-5 rounded-full">
                <AiFillUnlock size={80} className="text-white" />
              </div>
              <h1 className="font-medium">Secure and reliable</h1>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-main-bg p-5 rounded-full">
                <BsHandThumbsUpFill size={80} className="text-white" />
              </div>
              <h1 className="font-medium">Guarantee results</h1>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-main-bg p-5 rounded-full">
                <HiLocationMarker size={80} className="text-white" />
              </div>
              <h1 className="font-medium">Easy to find</h1>
            </div>
          </div>
        </div>
      </div>

      {/* contact us */}
      <div
        style={{
          backgroundImage: `url(${two})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "400px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          backgroundAttachment: "fixed",
          marginBottom:60
        }}
      >
        <div className="absolute inset-0 bg-main-bg/40" />
        <div className="absolute z-30 top-1/4 flex flex-col items-center w-full p-3">
          <div className="max-w-6xl mx-auto flex flex-col space-y-3 items-center justify-center">
            <h1 className="text-white font-medium text-xl">We provide</h1>
            <h1 className="text-white font-semibold capitalize text-2xl md:text-5xl text-center">
              The best Import and Export services
            </h1>
            <button onClick={()=>navigate('/contact')}
              className="font-medium bg-main-bg p-2 px-5 hover:bg-secondary-color
               text-white rounded-md hover:opacity-80"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
