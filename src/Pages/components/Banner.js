import React,{useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { EffectFade, Pagination,Autoplay } from "swiper";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { Circles } from "react-loader-spinner";
const Banner = () => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const navigate = useNavigate()
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const bannerData = useQuery(
    ["bannerDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}get-coursols`, {
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
      {bannerData.isFetched ? <Swiper
      allowTouchMove={false}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
     onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
     }}
        modules={[EffectFade,Navigation,Autoplay]}
        effect={"fade"}
        loop={true}
        autoplay={{delay:4000,disableOnInteraction: true}}
        // fadeEffect={{ crossFade: true }}
        className="mySwiper"
      >
         <div className="absolute w-full top-[80%] space-x-12 
          md:top-1/2 z-40 flex items-center justify-center md:justify-between md:px-10">
      
      <div ref={navigationNextRef}  className="cursor-pointer
       bg-main-bg m-1 p-2 rounded-md hover:bg-[#1a839f] transition-all duration-300 ease-out">
      <FaChevronLeft className="text-white" size={20}/>
      </div>
       <div ref={navigationPrevRef} className="
          cursor-pointer right-2 rounded-md bg-main-bg hover:bg-[#1a839f] transition-all duration-300 ease-out m-1 p-2">
             <FaChevronRight className="text-white" size={20}/>
          </div>
         </div>
        {bannerData?.data?.data?.map((item) => (
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${item.coursol_photo})`,
                backgroundPosition: "center",
                width: "100%",
                minHeight: "500px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c5c] to-transparent" />
              <div className="absolute z-30 top-[20%] flex flex-col items-start pl-3 md:pl-0 w-full">
                <div className="max-w-6xl mx-auto  w-full space-y-2 p-3 md:p-1 ">
                  <div className="flex flex-col items-start justify-start space-y-2 max-w-3xl">
                    <h1 className="font-bold text-4xl capitalize md:text-7xl text-white">
                      {item.title}{" "}
                    </h1>
                    <p className="font-normal text-white">{item.body}</p>
                    <button onClick={()=>navigate('/contact')}
                      className="font-medium bg-main-bg p-2 px-5
               text-white rounded-md hover:opacity-80"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> :
      <div className="flex items-center justify-center p-20">
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
      }
    </div>
  );
};

export default Banner;
