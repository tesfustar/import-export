import React from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import two from "../assets/one.jpg";
import one from "../assets/three.jpg";
import { Input, Textarea } from "@chakra-ui/react";
import { IoLogoTwitter } from "react-icons/io";
import OrderModal from "./components/OrderModal";
import moment from 'moment'
import { useMutation, useQuery } from "react-query";
import { Circles } from "react-loader-spinner";
import axios from "axios";
const ServiceByCategory = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const serviceByCategoryData = useQuery(
      ["serviceByCategoryDataApi",id],
      async () =>
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}get-services/${id}`, {
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
  console.log(serviceByCategoryData?.data?.data)
  return (
    <div>

    {/* detail */}
    <div>
      {serviceByCategoryData?.isFetched ? (
          <div className="max-w-6xl mx-auto w-full flex flex-col  items-start p-5 py-10">
          <button onClick={()=>navigate(-1)}
          className="bg-gray-300 hover:bg-gray-200 transition-all ease-in-out cursor-pointer p-2 px-3 rounded-md">Back {">"}</button>
          <div className="pt-5  grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-3">
             {serviceByCategoryData?.data?.data?.map((item) => (
             <div key={item.id} onClick={()=>navigate('/service/detail/' + item.id)}
             className="bg-white shadow-md w-full overflow-hidden relative ">
                <img
                  src={item.service_photo}
                  alt=""
                  className="h-44 w-full object-cover "
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
  )
}

export default ServiceByCategory