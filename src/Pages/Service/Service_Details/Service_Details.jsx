import Secondary_Title_Section from "../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import service_img from "../../../../public/images/Service_Page_Images/servicedetails.png";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../../Components/Shareable_Components/NavBar/NavBar";
import DynamicHeading_Section from "../../../Components/Shareable_Components/DynamicHeading_Section/DynamicHeading_Section";
import Breadcrumb_Section from "../../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";
import Global_Button_Section from "../../../Components/Shareable_Components/Global_Button_Section/Global_Button_Section";
import Footer from "../../../Components/Shareable_Components/Footer/Footer";

const Service_Details = () => {
  const [navfix, setNavfix] = useState(false);

  const { postId } = useParams();
  const [post, setPost] = useState(null); // State to store the blog post data
  useEffect(() => {
    // Fetch the data of the specific blog post
    // Example: fetch(`your-api-url/posts/${postId}`)
    // .then(response => response.json())
    // .then(data => setPost(data))
    // .catch(error => console.error('Error fetching data:', error));

    // For test, set a dummy post
    setPost({
      id: postId,
      author: "Jese Leos",
      joinedDate: "August 2014",
      readTime: "2min",
      imageUrl: "/docs/images/people/profile-picture-5.jpg",
      title: "Example Title",
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur,
        ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
        imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh
        nibh, at maximus ante fermentum sit amet. Pellentesque
        commodo lacus at sodales sodales. Quisque sagittis orci ut
        diam condimentum, vel euismod erat placerat. In iaculis
        arcu eros, eget tempus orci facilisis id.
      `,
    });
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);


       const breadcrumbItems = [
         { text: "Home", href: "#", icon: "home" },
         {
           text: "Service",
           href: "#",
           linkClasses:
             "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
           icon: "arrow",
         },
         {
           text: "All Service",
           href: "#",
           linkClasses:
             "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
           icon: "arrow",
         },
       ];
  return (
    <>
      <div
        className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${
          navfix ? "shadow-lg bg-white" : ""
        }`}
      >
        <NavBar />
      </div>

      <section>
        <div className="mt-20">
          <div className="bg-cover bg-center bg-no-repeat bg-contact-us-img  bg-blend-multiply h-[25rem] mt-20 mb-5">
            <div className="container mx-auto ">
              <div className=" flex flex-col justify-start ">
                <DynamicHeading_Section pageTitle={"our heading"} />
                <Breadcrumb_Section items={breadcrumbItems} />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-24 mb-24">
          <div></div>

          <div>
            <div>
              <div className="flex items-center gap-4">
                <img className="w-10 h-10 rounded-full" alt="Author Profile" />
                <div className="font-medium dark:text-white">
                  <div>{post.author}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Joined in {post.joinedDate} ({post.readTime} read)
                  </div>
                </div>
              </div>
              <div>
                {/* <div>
              <img src={post.imageUrl} alt="Blog Post" className="w-full h-[40rem]" />
            </div> */}
                <div>
                  {/* <div>
                    <img
                      src={service_img}
                      alt=""
                      className="w-full h-[30rem]"
                    />
                  </div> */}

                  <div>
                    <div className="grid grid-cols-12 gap-5 lg:gap-12  p-2">
                      <div className="col-span-12 lg:col-span-8 mb-6 lg:mb-0">
                        {/* <p>{post.content}</p> */}
                        <div className="bg-[#EBEBEB] rounded-[45px] shadow-lg  ">
                          <div className="p-5  ">
                            <img
                              className="object-cover object-center rounded-[35px] ml-12 h-full w-full "
                              alt="hero"
                              src={service_img}
                            />
                          </div>
                        </div>

                        <div>
                          <div className=" mt-5 mb-10">
                            <p className="border-t p-5">
                              Good or bad, we’d love to hear your thoughts. Find
                              us on Twitter (@twitter)
                            </p>

                            <Secondary_Title_Section
                              secondary_title={"Smart Home Installation"}
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut et massa mi. Aliquam in hendrerit urna.
                              Pellentesque sit amet sapien fringilla, mattis
                              ligula consectetur, ultrices mauris. Maecenas
                              vitae mattis tellus. Nullam quis imperdiet augue.
                              Vestibulum auctor ornare leo, non suscipit magna
                              interdum eu. Curabitur pellentesque nibh nibh, at
                              maximus ante fermentum sit amet. Pellentesque
                              commodo lacus at sodales sodales.
                            </p>
                            <p className="mt-5 mb-5">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut et massa mi. Aliquam in hendrerit urna.
                              Pellentesque sit amet sapien fringilla, mattis
                              ligula consectetur, ultrices mauris. Maecenas
                              vitae mattis tellus. Nullam quis imperdiet augue.
                              Vestibulum auctor ornare leo, non suscipit magna
                              interdum eu. Curabitur pellentesque nibh nibh, at
                              maximus ante fermentum sit amet. Pellentesque
                              commodo lacus at sodales sodales.
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut et massa mi. Aliquam in hendrerit urna.
                              Pellentesque sit amet sapien fringilla, mattis
                              ligula consectetur, ultrices mauris. Maecenas
                              vitae mattis tellus. Nullam quis imperdiet augue.
                              Vestibulum auctor ornare leo, non suscipit magna
                              interdum eu. Curabitur pellentesque nibh nibh, at
                              maximus ante fermentum sit amet. Pellentesque
                              commodo lacus at sodales sodales.
                            </p>

                            <Secondary_Title_Section
                              secondary_title={"Service Benefite"}
                            />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut et massa mi. Aliquam in hendrerit urna.
                              Pellentesque sit amet sapien fringilla, mattis
                              ligula consectetur, ultrices mauris. Maecenas
                              vitae mattis tellus. Nullam quis imperdiet augue.
                              Vestibulum auctor ornare leo, non suscipit magna
                              interdum eu. Curabitur pellentesque nibh nibh, at
                              maximus ante fermentum sit amet. Pellentesque
                              commodo lacus at sodales sodales.
                            </p>
                            <div className="flex gap-10 mt-10 mb-10">
                              <div>
                                <div className="flex gap-2 mt-5 mb-5">
                                  <div>
                                    <div className="border-r border-4 border-blue-600 h-[10rem]"></div>
                                  </div>

                                  <div>
                                    <div>
                                      <h1 className="font-bold text-xl text-green-900">
                                        Feature List
                                      </h1>
                                      <ul className="mt-3 flex flex-col space-y-2">
                                        <li className="flex">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="mr-2 h-auto w-6 text-green-600 sm:w-7"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                            ></path>
                                          </svg>
                                          <p className="text-base text-slate-700 sm:text-lg">
                                            30 seconds to setup
                                          </p>
                                        </li>
                                        <li className="flex">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="mr-2 h-auto w-6 text-green-600 sm:w-7"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                            ></path>
                                          </svg>
                                          <p className="text-base text-slate-700 sm:text-lg">
                                            Easy to use
                                          </p>
                                        </li>
                                        <li className="flex">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="mr-2 h-auto w-6 text-green-600 sm:w-7"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                            ></path>
                                          </svg>
                                          <p className="text-base text-slate-700 sm:text-lg">
                                            Generous free-tier
                                          </p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                {" "}
                                <div className="bg-[#EBEBEB] rounded-[45px] shadow-lg  ">
                                  <div className="p-5  ">
                                    <img
                                      className="object-cover object-center rounded-[35px] ml-12 h-[15rem] w-full "
                                      alt="hero"
                                      src={service_img}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <Secondary_Title_Section
                                secondary_title={"Work Process"}
                              />
                              <p className="mt-10 mb-10">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut et massa mi. Aliquam in
                                hendrerit urna. Pellentesque sit amet sapien
                                fringilla, mattis ligula consectetur, ultrices
                                mauris. Maecenas vitae mattis tellus.{" "}
                              </p>

                              <div className="flex gap-5">
                                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                  <svg
                                    className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                                  </svg>
                                  <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                      Need a help in Claim?
                                    </h5>
                                  </a>
                                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                    Go to this step by step guideline process on
                                    how to certify for your weekly benefits:
                                  </p>
                                  <a
                                    href="#"
                                    className="inline-flex font-medium items-center text-blue-600 hover:underline"
                                  >
                                    See our guideline
                                    <svg
                                      className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 18"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                      />
                                    </svg>
                                  </a>
                                </div>
                                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                  <svg
                                    className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                                  </svg>
                                  <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                      Need a help in Claim?
                                    </h5>
                                  </a>
                                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                    Go to this step by step guideline process on
                                    how to certify for your weekly benefits:
                                  </p>
                                  <a
                                    href="#"
                                    className="inline-flex font-medium items-center text-blue-600 hover:underline"
                                  >
                                    See our guideline
                                    <svg
                                      className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 18"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                      />
                                    </svg>
                                  </a>
                                </div>
                                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                  <svg
                                    className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                                  </svg>
                                  <a href="#">
                                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                      Need a help in Claim?
                                    </h5>
                                  </a>
                                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                                    Go to this step by step guideline process on
                                    how to certify for your weekly benefits:
                                  </p>
                                  <a
                                    href="#"
                                    className="inline-flex font-medium items-center text-blue-600 hover:underline"
                                  >
                                    See our guideline
                                    <svg
                                      className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 18"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-3 mb-6 lg:mb-0">
                        <div className=" w-auto bg-[#00ABE4] border border-gray-200 rounded-lg shadow  p-5">
                          {/* <h5 className="mb-3 p-2 text-base font-semibold bg-[#00ABE4] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                            popular post
                          </h5> */}

                          <form className="max-w-md mx-auto">
                            <label
                              htmlFor="default-search"
                              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                              Search
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                  />
                                </svg>
                              </div>
                              <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Mockups, Logos..."
                                required
                              />
                              <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Search
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="w-auto bg-[#00ABE4] border border-gray-200 rounded-lg shadow mt-5  p-5">
                          <h5 className="mb-3 p-2 text-base font-semibold bg-[#00ABE4] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl border-loader">
                            All Service
                          </h5>

                          <div className="flex flex-col justify-center w-full">
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                            <Global_Button_Section
                              button_text={"Smart Home Installation"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service_Details;
