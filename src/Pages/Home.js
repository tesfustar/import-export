import React from "react";
import { Link, useNavigate } from "react-router-dom";
import two from "../assets/one.jpg";
import Banner from "./components/Banner";
import OrderModal from "./components/OrderModal";
import { FaHandshake } from "react-icons/fa";
import { AiFillUnlock } from "react-icons/ai";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { HiLocationMarker, HiHandThumbUp } from "react-icons/hi";
import { useMutation, useQuery } from "react-query";
import { Circles } from "react-loader-spinner";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate()
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const servicesCategoryData = useQuery(
    ["servicesCategoryDataApi"],
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
  const blogData = useQuery(
    ["blogDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}get-blogs`, {
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

        <div className="w-full">
          {servicesCategoryData.isFetched ? (
            <div>

            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-3">
           { servicesCategoryData?.data?.data?.map((item) => (
             <div key={item.id} onClick={()=>navigate('/service/detail/' + item.id)}
             className="bg-white shadow-md w-full overflow-hidden relative cursor-pointer">
                <img
                  src={item.service_category_photo}
                  alt=""
                  className="h-44 w-full object-cover hover:scale-110 duration-300 ease-out"
                  />
                <p className="absolute top-3 right-3 bg-main-bg font-medium p-1 px-2
                 rounded-md text-[13px] text-white">{item.type}</p>
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
            ))}
              </div>
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
      {/* blogs */}
      <div className="py-10 flex flex-col items-center justify-center p-5">
        <div className="pb-10 flex flex-col items-center justify-start w-full space-y-1">
          <h1 className="font-semibold uppercase text-xl md:text-2xl text-dark-color">
            Blogs
          </h1>
          <div className="w-16 h-[3px] bg-main-bg" />
        </div>
      </div>
      <div className="pb-20 p-5">
        {blogData.isFetched ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
           gap-3 md:gap-10">
            {blogData?.data?.data?.data?.slice(0,3)?.map((item) => (
              <div
                key={item.id}
                className="shadow-lg transition-all duration-700  bg-white overflow-hidden"
              >
                <img src={item.blog_photo} alt="" 
                className="h-44 w-full object-cover hover:scale-[1.07] duration-300 ease-out"/>
                <div className="p-2">
                  <h1 className="font-medium text-lg uppercase line-clamp-1  text-dark-color">
                    {item.title}
                  </h1>
                  <p className="text-sm line-clamp-2">{item.body}</p>
                <div className="pt-3">
                  <p onClick={()=>navigate(`/blog/detail/${item.id}`)}
                   className="text-main-color hover:text-secondary-color cursor-pointer
                  font-medium hover:tracking-wider transition-all duration-700">Read More</p>
                </div>
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
      <p onClick={()=>navigate('/blog')}
      className="text-gray-500 flex pt-5 text-lg items-center text-center w-full justify-center cursor-pointer">View All</p>
      </div>
      {/* contact */}
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
            Our company is found in Addis Abebe ,Ethiopia .We are a great export and importer. We export all types of agricultural products We are known by our work of ethics, high quality products and by a very good work reputation .
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
              <h1 className="font- text-lg">Secure and reliable</h1>
            </div>
            <div className="flex  items-center space-x-2">
              <div className="bg-main-bg p-3 rounded-full">
                <BsHandThumbsUpFill size={40} className="text-white" />
              </div>
              <h1 className="font- text-lg">Guarantee results</h1>
            </div>
            <div className="flex  items-center space-x-2">
              <div className="bg-main-bg p-3 rounded-full">
                <HiLocationMarker size={40} className="text-white" />
              </div>
              <h1 className="font- text-lg">Easy to find</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
