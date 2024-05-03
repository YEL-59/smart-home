import Main_Title_Section from "../../../../Components/Shareable_Components/Main_Title_Section/Main_Title_Section";
import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import whychooseusimg from "../../../../../public/images/Home_Page_Images/service-img/service_card-1.avif";

import Statistics from "../Statistics/Statistics";
import Why_ChoosUs_Single_Card from "./Why_ChoosUs_Components/Why_ChoosUs_Single_Card";

const Why_ChooseUs_Section = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  ">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-16 py-9   ">
            <Secondary_Title_Section secondary_title={"Why Choose Us"} />
            <div className="mt-5 mb-5">
              <Main_Title_Section
                main_title={"Discover How We Can Enhance Your Living."}
              />
            </div>

            <div className="border-2 border-dashed p-1 rounded mt-5" data-aos="flip-up">
              <Why_ChoosUs_Single_Card
                title={"Expert Tech Support"}
                sort_description={
                  "Ensuring easy integration and functionality in the automation realm, our dedicated tech support address any glitches and streamline the setup of complex home automation systems."
                }
              />
              <Why_ChoosUs_Single_Card
                title={"Elevate Your Living"}
                sort_description={
                  "With advanced home automation solutions, you can gain control over your living environment, enabling effortless management of lighting, security, entertainment, and more for unparalleled convenience and peace of mind."
                }
              />
              <Why_ChoosUs_Single_Card
                title={"Top-Quality Hardware"}
                sort_description={
                  "From smart devices to networking equipment, we deliver the latest and most reliable hardware solutions, tailored to optimize your smart home experience."
                }
              />
            </div>
          </div>

          <div className="lg:max-w-2xl ">
            <div className="bg-[#EBEBEB] rounded-[45px] shadow-lg  ">
              <div className="p-5  ">
                <img
                  className="object-cover object-center rounded-lg -ml-10 h-full w-full "
                  alt="hero"
                  src={whychooseusimg}
                />
              </div>
            </div>
            <div className="border-2 border-dashed p-2 rounded mt-10">
              <Statistics />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Why_ChooseUs_Section