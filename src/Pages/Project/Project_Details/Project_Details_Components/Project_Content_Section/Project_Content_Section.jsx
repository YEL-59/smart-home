
import Secondary_Title_Section from "../../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import service_img from '../../../../../../public/images/Service_Page_Images/service_page_images.png'
import Global_Button_Section from "../../../../../Components/Shareable_Components/Global_Button_Section/Global_Button_Section";

const Project_Content_Section = () => {
  return (
    <>
      <section>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-12 gap-5 lg:gap-12  p-2">
            <div className="col-span-12 lg:col-span-9 mb-6 lg:mb-0">
              <Secondary_Title_Section secondary_title={"Project Over View"} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet. Pellentesque commodo lacus at sodales sodales.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                Aliquam in hendrerit urna. Pellentesque sit amet sapien
                fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
                vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
                auctor ornare leo
              </p>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo
              </p>
              <div>
                <Secondary_Title_Section secondary_title={"Project Goal"} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet. Pellentesque commodo lacus at sodales sodales.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
                  mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                  fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo
                </p>
              </div>
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
                        className="object-cover object-center rounded-[35px] ml-12 h-[15rem] w-[25rem] "
                        alt="hero"
                        src={service_img}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="mx-auto flex h-[500px] max-w-[90rem] flex-col justify-center rounded-2xl bg-blue-500 bg-opacity-5 px-4 text-blue-500 dark:bg-opacity-20 md:h-[400px] lg:h-[500px]  relative border-4 border-blue-500">
                  <div className="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white dark:bg-black"></div>
                  <span className="mb-8 text-center text-4xl font-bold">
                    Project Challenge
                  </span>
                  <ul className="flex flex-wrap text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-sm">
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Library Agnostic
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Mutation Observer
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Flexbox Layout
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Full True RTL Support
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Multi Row Slides Layout
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      3D Effects
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Two-way Control
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Full Navigation Control
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Rich API
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Most Flexible Slides Layout Grid
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Parallax Transitions
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Images Lazy Loading
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Virtual Slides
                    </li>
                    <li className="my-1 flex w-1/2 items-center">
                      <svg
                        className="mr-2 flex-shrink-0 text-blue-500"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      And many more
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 mb-6 lg:mb-0">
              <div className="bg-[#00ABE4] p-2 rounded">
                <Secondary_Title_Section
                  secondary_title={"Contact For Inquery"}
                />
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                  Aliquam in hendrerit{" "}
                </p>
                <Global_Button_Section button_text={"Contact Us"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project_Content_Section
