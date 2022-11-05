import React from "react";
import { Link, useNavigate } from "react-router-dom";
import two from "../assets/one.jpg";
import one from "../assets/three.jpg";
import { Input, Textarea } from "@chakra-ui/react";
import { IoLogoTwitter } from "react-icons/io";
import OrderModal from "./components/OrderModal";
import { useMutation, useQuery } from "react-query";
import { Circles } from "react-loader-spinner";
import axios from "axios";
const ImportServices = () => {
  const navigate = useNavigate()
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const servicesData = useQuery(
    ["servicesDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}get-service-categories`, {
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
        <div className="absolute z-30 top-[10%]  md:top-1/4  flex flex-col items-start w-full">
          <div className="max-w-6xl mx-auto  w-full grid grid-cols-1 md:grid-cols-2 gap-3 space-y-2 p-5 ">
            <div className="flex flex-col items-start space-y-2">
              <h1 className="font-semibold text-white text-4xl">Services</h1>
              <p className="text-dark-gray font-medium text-sm">
                <Link to="/home" className="text-secondary-color">
                  Home
                </Link>{" "}
                /Import Services
              </p>
            </div>
            <div className="flex items-start justify-start md:items-end md:justify-end max-w-lg">
            <p className="text-white font-medium text-lg text-start md:text-end">
                   Your best    
                <span className="text-secondary-color"> Import</span> and{" "}
                <span className="text-secondary-color">Export </span>
                choice!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our services */}

      <div className="py-10 flex flex-col items-center justify-center p-5">
        <div className="pb-10 flex flex-col items-center justify-start w-full space-y-1">
          <h1 className="font-medium uppercase text-xl md:text-2xl text-dark-color">
            Our Import Services
          </h1>
          <div className="w-16 h-[3px] bg-main-bg" />
        </div>

        <div className="w-full">
          {servicesData.isFetched ? (
           <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            { servicesData?.data?.data?.filter((item)=>item.type === "Import")?.map((item) => (
              <div onClick={()=>navigate('/service/detail/' + item.id)}
              key={item.id} className="bg-white shadow-md w-full overflow-hidden cursor-pointer">
                <img
                  src={item.service_category_photo}
                  alt=""
                  className="h-44 w-full object-cover hover:scale-110 duration-300 ease-out"
                />
                <div className="p-3 flex flex-col items-start space-y-2">
                  <div className="flex flex-col items-start w-full ">
                    <h1 className="font-semibold uppercase   text-dark-color">
                      {item.title}
                    </h1>
                    <div className="w-6 h-[3px] bg-main-bg" />
                  </div>
                  <p className="text-dark-color font-light text-sm">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
           </div>
          ) : (
            <div className="flex items-center justify-center p-20 w-full">
            <Circles
      height="80"
      width="80"
      color="#0f4c5c"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
          </div>
          )}
        </div>
      </div>

      {/*  */}
      <div
        style={{
          backgroundImage: `url(${one})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "400px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          backgroundAttachment: "fixed",
          marginBottom:50
        }}
      >
        <div className="absolute inset-0 bg-main-bg/40" />
        <div className="absolute z-30 top-1/4 flex flex-col items-center w-full p-3">
          <div className="max-w-6xl mx-auto flex flex-col space-y-3 items-center justify-center">
          <h3 className="text-white font-bold text-2xl md:text-4xl text-center">Want to work with our professional team? Do you have any questions?</h3>
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

export default ImportServices;
