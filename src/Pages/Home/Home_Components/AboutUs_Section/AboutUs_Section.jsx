import aboutimg from "../../../../../public/images/Home_Page_Images/Aboutus_Page_Images/abooutus-img.png";
import { FiSearch } from "react-icons/fi";
import Secoundary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Main_Title_Section from "../../../../Components/Shareable_Components/Main_Title_Section/Main_Title_Section";
import Text_Content_Section from "../../../../Components/Shareable_Components/Text_Content_Section/Text_Content_Section";
import Statistics from "../Statistics/Statistics";
const AboutUs_Section = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  ">
          <div className="lg:max-w-2xl ">
            <div className="bg-[#EBEBEB] rounded-[45px] shadow-lg  ">
              <div className="p-5  ">
                <img
                  className="object-cover object-center rounded-lg ml-10 h-full w-full "
                  alt="hero"
                  src={aboutimg}
                />
              </div>
            </div>
            <div className="max-w-md border border-black bg-black opacity-50 rounded-2xl p-5 w-[50%] hidden md:block -mt-12 relative bottom-0 -right-[29rem]">
              <div className="p-1">
                <div className="flex items-center">
                  <div className="p-3 bg-[#97d4a8] rounded-full shadow-lg">
                    <FiSearch />
                  </div>
                  <div className="ml-2 text-white">
                    <p className=" text-xl font-bold">Professional</p>
                    <h2 className="text-md f ">Employee</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* https://dummyimage.com/720x600 */}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 py-9   ">
            <Secoundary_Title_Section secondary_title={"About Us"} />
            <div className="mt-5 mb-5">
              <Main_Title_Section
                main_title={"The core mission behind all our work"}
              />
            </div>

            <div className="text-lg font-semibold ">
              <Text_Content_Section
                text_content={
                  "With 8 years of excellence in the tech industry, Smart Home People is dedicated to delivering cutting-edge solutions and unparalleled customer service. Our team excels in home automation, ensuring easy integration and innovation. Let embrace the future of home automation together."
                }
              />
            </div>

            <div className="border-2 border-dashed p-2 rounded mt-10">
              <Statistics />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs_Section;