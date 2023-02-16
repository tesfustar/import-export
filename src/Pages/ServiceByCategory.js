import React from "react";
import {  useNavigate,useParams } from "react-router-dom";
import {  useQuery } from "react-query";
import { Circles } from "react-loader-spinner";
import axios from "axios";
import parse from "html-react-parser";
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
  return (
    <div className="w-full">

    {/* detail */}
    <div className="w-full">
      {serviceByCategoryData?.isFetched ? (
          <div className="max-w-6xl mx-auto w-full flex flex-col  items-start p-5 py-10">
          <button onClick={()=>navigate(-1)}
          className="bg-gray-300 hover:bg-gray-200 transition-all ease-in-out cursor-pointer p-2 px-3 rounded-md">Back {">"}</button>
          <div className="pt-5 w-full grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-3">
             {serviceByCategoryData?.data?.data?.length >0 ? serviceByCategoryData?.data?.data?.map((item) => (
             <div key={item.id} 
             className="bg-white shadow-md  overflow-hidden relative w-full ">
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
                    {parse(item.body)}
                  </p>
                </div>
              </div>
            )) : <h1 className="font-medium text-lg text-center capitalize">no Data Found</h1>}
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