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
const BlogDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const blogDetailData = useQuery(
      ["blogDetailDataApi",id],
      async () =>
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}show-blogs/${id}`, {
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

      {/* detail */}
      <div>
        {blogDetailData?.isFetched ? (
            <div className="max-w-6xl mx-auto w-full flex flex-col  items-start p-5 py-10">
            <button onClick={()=>navigate(-1)}
            className="bg-gray-300 hover:bg-gray-200 transition-all ease-in-out cursor-pointer p-2 px-3 rounded-md">Back {">"}</button>
            <div className="pt-5 flex flex-col items-start space-y-2">
               <h1  className="font-medium text-xl  text-dark-color">{blogDetailData?.data?.data?.title}</h1>
              
            <img src={blogDetailData?.data?.data?.blog_photo} alt="" />
            <p className="text-gray-500">PostedAt :{moment(blogDetailData?.data?.data?.createdAt).format("HH-DD-YYYY")}</p>
            <p  className="text-gray-500">{blogDetailData?.data?.data?.body}</p>
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

export default BlogDetail