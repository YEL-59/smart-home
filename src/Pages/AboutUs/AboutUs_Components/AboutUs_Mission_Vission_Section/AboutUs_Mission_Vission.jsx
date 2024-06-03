import Main_Title_Section from "../../../../Components/Shareable_Components/Main_Title_Section/Main_Title_Section";
import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Text_Content_Section from "../../../../Components/Shareable_Components/Text_Content_Section/Text_Content_Section";

import aboutimg1 from "../../../../../public/images/Aboutus_Page_Images/mission_img-1.png";

import aboutimg2 from "../../../../../public/images/Aboutus_Page_Images/mission_img-2.png";
const AboutUs_Mission_Vission = () => {
  return (
    <>
      <div className="p-5 sm:p-8">
        <section className="text-gray-600 ">
          <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col  ">
            <div className="lg:flex-grow md:w-1/2 lg:pl-2 md:pr-2 py-9   ">
              <Secondary_Title_Section
                secondary_title={"Mission & Vision"}
                active={"active"}
              />
              <div className="mt-5 mb-5">
                <Main_Title_Section
                  main_title={"Building a Future of Intelligent Homes"}
                />
              </div>

              <div className="text-lg font-semibold ">
                <Text_Content_Section
                  text_content={
                    "At Smart Home People, we aim to assist individuals and families in embracing the advantages of smart home technology. Our dedication lies in enhancing living spaces to be more convenient, secure, and efficient. Join us on this journey!"
                  }
                />
              </div>
              <div className="flex flex-col md:flex-row w-full justify-between">
                <div className=" lg:col-start-2 max-w-md">
                  <h4 className="mt-2 text-md font-bold leading-2 text-[#00ABE4] ">
                    Our Mission
                  </h4>

                  <ul className="mt-2 space-y-3 font-medium">
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[#00ABE4]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-3 leading-5 text-gray-600 max-w-md">
                        To empower individuals and families to embrace the
                        transformative potential of smart home technology.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className=" lg:col-start-2 max-w-md">
                  <h4 className="mt-2 text-md font-bold leading-2 text-[#00ABE4] ">
                    Our Mission
                  </h4>

                  <ul className="mt-2 space-y-3 font-medium">
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[#00ABE4]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-3 leading-5 text-gray-600 max-w-md">
                        To empower individuals and families to embrace the
                        transformative potential of smart home technology.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="border-2 border-dashed p-2 rounded mt-10">
                <Statistics />
              </div> */}
            </div>
            <div className="lg:max-w-2xl ">
              <div className="flex justify-between gap-5 ">
                <div className="flex flex-col">
                  <img src={aboutimg1} className="mb-5" />
                  {/* <img src="https://source.unsplash.com/wfalq01jJuU" /> */}
                  <div className="grid grid-cols-2 w-full gap-5">
                    <div className="border-2 border-dashed rounded-lg p-2 ">
                      <h1 className=" font-bold text-[#00ABE4]">10K</h1>
                      <p className="text-[10px] max-w-[120px]">
                        Great conversations per month
                      </p>
                    </div>
                    <div className="border-2 border-dashed rounded-lg p-2 ">
                      <h1 className="font-bold text-[#00ABE4]">95K</h1>
                      <p className="text-[10px] max-w-[120px]">
                        Project Complete
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <img src={aboutimg2} className=" mt-[8rem] " />
                </div>
              </div>

              {/* <div className="bg-[#EBEBEB] rounded-[45px] shadow-lg  ">
                <div className="p-5  ">
                  <img
                    className="object-cover object-center rounded-lg ml-10 h-full w-full "
                    alt="hero"
                    src={aboutimg}
                  />
                </div>
              </div> */}

              {/* https://dummyimage.com/720x600 */}
            </div>
          </div>
        </section>
        {/* <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-2 [&>img:not(:first-child)]:mt-20">
       
        <img src="https://source.unsplash.com/lp40q07DIe0"/>
        <img src="https://source.unsplash.com/wfalq01jJuU"/>
        <img src="https://source.unsplash.com/rMHNK_skwwU"/>
       
    </div> */}
      </div>
    </>
  );
};

export default AboutUs_Mission_Vission;
