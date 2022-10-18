import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import two from "../../assets/restone.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.css";
import { EffectFade, Pagination } from "swiper";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate()
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const bannerData = useQuery(
    ["bannerDataApi"],
    async () =>
      await axios.get(`http://simple.hulum.et/api/coursols`, {
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
      <Swiper
        navigation={true}
        modules={[Navigation]}
        effect={"fade"}
        loop={true}
        autoplay={true}
        className="mySwiper"
      >
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
              <div className="absolute z-30 top-1/4 flex flex-col items-start pl-12 md:pl-0 w-full">
                <div className="max-w-6xl mx-auto  w-full space-y-2 p-3 md:p-1 ">
                  <div className="flex flex-col items-start justify-start space-y-2 max-w-2xl">
                    <h1 className="font-bold text-2xl md:text-7xl text-white">
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
      </Swiper>
    </div>
  );
};

export default Banner;
