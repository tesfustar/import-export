import React from "react";
import { Link } from "react-router-dom";
import two from "../assets/restone.jpg";
import Banner from "./components/Banner";
import OrderModal from "./components/OrderModal";
import { FaHandshake } from "react-icons/fa";
import { AiFillUnlock } from "react-icons/ai";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { HiLocationMarker, HiHandThumbUp } from "react-icons/hi";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
const Home = () => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const servicesData = useQuery(
    ["servicesDataApi"],
    async () =>
      await axios.get(`http://simple.hulum.et/api/get-services`, {
        headers,
      }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {},
    }
  );
  const sample = [
    {
      id: 1,
      img: two,
      title: " Car Shipping",
      description:
        "  The full passage of standard Lorem Ipsum copy is: Lorem ipsum dolor sit amet, c.",
    },
    {
      id: 2,
      img: two,
      title: " Car Shipping",
      description:
        "  The full passage of standard Lorem Ipsum copy is: Lorem ipsum dolor sit amet, c.",
    },
    {
      id: 3,
      img: two,
      title: " Car Shipping",
      description:
        "  The full passage of standard Lorem Ipsum copy is: Lorem ipsum dolor sit amet, c.",
    },
  ];
  return (
    <>
      {/* banner */}
      <Banner />
      <div></div>
      {/* our services */}

      <div className="py-10 flex flex-col items-center justify-center p-5">
        <div className="pb-10 flex flex-col items-center justify-start w-full space-y-1">
          <h1 className="font-medium uppercase text-xl md:text-2xl text-dark-color">
            Our Services
          </h1>
          <div className="w-16 h-[3px] bg-main-bg" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {servicesData.isFetched ? (
            servicesData?.data?.data?.map((item) => (
              <div key={item.id} className="bg-white shadow-md w-full overflow-hidden">
                <img
                  src={item.service_photo}
                  alt=""
                  className="h-44 w-full object-cover hover:scale-110 duration-300 ease-out"
                />
                <div className="p-3 flex flex-col items-start space-y-2">
                  <div className="flex flex-col items-start w-full ">
                    <h1 className="font-semibold uppercase   text-dark-color">
                      {item.title}
                    </h1>
                    <div className="w-16 h-[3px] bg-main-bg" />
                  </div>
                  <p className="text-dark-color font-light text-sm">
                    {item.body}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify p-3">
              <h1 className="font-medium text-xl">Loading...</h1>
            </div>
          )}
        </div>
      </div>
      {/*  */}
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
        }}
      >
        <div className="absolute inset-0 bg-main-bg/40" />
        <div className="absolute z-30 top-1/4 flex flex-col items-center w-full p-3">
          <div className="max-w-6xl mx-auto flex flex-col space-y-3 items-center justify-center">
            <h1 className="text-white font-medium text-xl">We provide</h1>
            <h1 className="text-white font-semibold capitalize text-2xl md:text-5xl text-center">
              The best sea and air freight services
            </h1>
            <button
              className="font-medium bg-main-bg p-2 px-5 hover:bg-secondary-color
               text-white rounded-md hover:opacity-80"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* why you choose as */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-9 gap-5 py-14">
        <div className="md:col-span-6 flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 ">
          <div className="w-fit flex flex-shrink-0">
            <img
              src="https://gsms.et/images/resources/about-image.jpg"
              alt=""
              className="h-72"
            />
          </div>
          <div className="p-5">
            <div className=" flex flex-col items-start  w-full space-y-2">
              <h1 className="font-bold uppercase text-xl md:text-2xl text-dark-color">
                WHY SHOULD YOU CHOOSE US !
              </h1>
              <div className="w-16 h-[3px] bg-main-bg" />
            </div>
            <p>
              GSMS Trading & Logistics Plc is one of Ethiopia's leading Co. with
              interests include Import, Export, Transport, Cement Distribution,
              Domestic business Investment and sales of a variety of products
              and services within and abroad.
            </p>
          </div>
        </div>
        {/* second grid */}
        <div className="md:col-span-3 w-full px-5">
          <div className="flex flex-col space-y-5  w-full">
            <div className="flex  items-center space-x-2">
              <div className="bg-main-bg p-3 rounded-full">
                <FaHandshake size={40} className="text-white" />
              </div>
              <h1 className="font- text-lg">We Are Trusted</h1>
            </div>
            <div className="flex  items-center space-x-2">
              <div className="bg-main-bg p-3 rounded-full">
                <AiFillUnlock size={40} className="text-white" />
              </div>
              <h1 className="font- text-lg">The Best Security</h1>
            </div>
            <div className="flex  items-center space-x-2">
              <div className="bg-main-bg p-3 rounded-full">
                <BsHandThumbsUpFill size={40} className="text-white" />
              </div>
              <h1 className="font- text-lg">100% Guarantee</h1>
            </div>
            <div className="flex  items-center space-x-2">
              <div className="bg-main-bg p-3 rounded-full">
                <HiLocationMarker size={40} className="text-white" />
              </div>
              <h1 className="font- text-lg">Quick Location</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
