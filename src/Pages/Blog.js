import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import two from "../assets/one.jpg";
import parse from "html-react-parser";
import { useQuery } from "react-query";
import { Circles } from "react-loader-spinner";
import axios from "axios";
const Blog = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const blogData = useQuery(
    ["blogDataApi", page],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}get-blogs?page=${page}`,
        {
          headers,
        }
      ),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {},
    }
  );

  console.log(blogData?.data?.data);
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
              <h1 className="font-semibold text-white text-4xl">Blogs</h1>
              <p className="text-dark-gray font-medium text-sm">
                <Link to="/home" className="text-secondary-color">
                  Home
                </Link>{" "}
                /Blog
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
      {/* blog section */}
      <div className="py-10 flex flex-col items-center justify-center p-5">
        <div className="pb-10 flex flex-col items-center justify-start w-full space-y-1">
          <h1 className="font-semibold uppercase text-xl md:text-2xl text-dark-color">
            Blogs
          </h1>
          <div className="w-16 h-[3px] bg-main-bg" />
        </div>
      </div>

      {/*  */}
      <div className="pb-20 p-5">
        {blogData.isFetched ? (
          <div className="flex flex-col items-center space-y-2">
            <div
              className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
           gap-3 md:gap-5"
            >
              {blogData?.data?.data?.data?.map((item) => (
                <div
                  key={item.id}
                  className="shadow-lg transition-all duration-700 bg-white overflow-hidden"
                >
                  <img
                    src={item.blog_photo}
                    alt=""
                    className="h-44 w-full object-cover hover:scale-[1.07] duration-300 ease-out"
                  />
                  <div className="p-2">
                    <h1 className="font-medium uppercase line-clamp-1  text-dark-color">
                      {item.title}
                    </h1>
                    <p className="text-sm line-clamp-2">{parse(item.body)}</p>
                    <div className="pt-3">
                      <p
                        onClick={() => navigate(`/blog/detail/${item.id}`)}
                        className="text-main-color  cursor-pointer hover:text-secondary-color 
                  font-medium hover:tracking-wider transition-all duration-700"
                      >
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3 md:space-x-5">
              <button
                onClick={() => setPage((prevPage) => prevPage - 1)}
                className={`bg-main-bg px-5 ${
                  blogData?.data?.data?.prev_page_url == null
                    ? "hidden"
                    : "flex"
                } text-white font-medium rounded-sm hover:bg-[#e36414]  p-2`}
              >
                Previous
              </button>
              <button
                onClick={() => setPage((prevPage) => prevPage + 1)}
                className={`bg-main-bg px-5 ${
                  blogData?.data?.data?.next_page_url == null
                    ? "hidden"
                    : "flex"
                } text-white font-medium rounded-sm hover:bg-[#e36414]  p-2`}
              >
                Next
              </button>
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
  );
};

export default Blog;
