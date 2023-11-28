import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogItems,
  selectBlogs,
  selectBlogsStatus,
  selectBlogsError,
} from "@/features/blogs/blogsSlice";
import { AppDispatch } from "@/store";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AiOutlineCalendar } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

const Blogs: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const status = useSelector(selectBlogsStatus);
  const error = useSelector(selectBlogsError);

  useEffect(() => {
    dispatch(fetchBlogItems());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  blogs.forEach((post) => {
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  return (
    <div className="bg-background-fill px-[30px] lg:px-[200px] py-[70px] lg:py-[150px]">
      <div className="flex flex-col items-center">
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          className="flex flex-col items-start lg:items-center mb-[30px] lg:mb-[40px]"
        >
          <h5 className="text-border-col text-[11px] mb-[15px] uppercase font-semibold tracking-widest text-center">
            Our Blog
          </h5>
          <h2 className="text-[1.5rem] lg:text-[2.8rem] leading-tight text-primaryText font-semibold tracking-wide mb-[20px]">
            🥩 Blogs & Articles 🥩
          </h2>
          <p className=" text-secondaryText text-[13px] lg:text-[14px] w-full lg:w-[80%] leading-tight text-center">
            Indulge in a culinary journey with DeliCuts Meats, where we bring
            you a collection of mouth-watering blogs and articles. From expert
            cooking tips to the latest trends in the world of premium cuts, our
            content is crafted to elevate your meaty experiences.
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          className="flex flex-col lg:flex-row justify-between items-start border-0 lg:border border-border-col w-full relative mb-[70px] lg:mb-[80px]"
        >
          {blogs.map((blog) => {
            const formattedDate = new Date(blog.date).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            return (
              <AnimationOnScroll
                key={blog.id}
                animateIn="animate__slideInUp"
                className="h-auto w-full lg:w-[30%] border border-secondaryText relative pb-[20px] mb-[20px] lg:mb-0 left-0 lg:left-[-40px] top-0 lg:top-[40px] bg-background-fill"
              >
                <Image
                  width={200}
                  height={200}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[200px] object-cover mb-[10px]"
                />
                <div className="px-[15px]">
                  <h4 className="text-[14px] font-semibold mb-[10px] text-primaryText">
                    {blog.title}
                  </h4>
                  <div className="text-primaryText text-[16px] mb-[10px] flex justify-start items-center gap-[10px]">
                    <AiOutlineCalendar className="text-border-col" />
                    <p className="text-border-col text-[13px] tracking-wide">
                      {formattedDate}
                    </p>
                    <LuMessageSquare className="text-border-col" />
                    <p className="text-border-col text-[13px] tracking-wide">
                      0
                    </p>
                  </div>
                  <p className=" text-secondaryText text-[13px] w-full h-[100px] overflow-hidden">
                    <div className="line-clamp-4">{blog.content}</div>
                  </p>
                  <Link
                    href={blog.link}
                    className="uppercase text-[#bf0514] text-[12px] font-semibold tracking-wider"
                  >
                    Read More
                  </Link>
                </div>
              </AnimationOnScroll>
            );
          })}
        </AnimationOnScroll>

        <button className=" text-secondaryText text-[12px] font-medium flex justify-center items-center bg-secondary-bg px-[20px] py-[10px] uppercase">
          View all blog
        </button>
      </div>
    </div>
  );
};

export default Blogs;
