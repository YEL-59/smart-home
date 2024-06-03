import Footer from "../../Components/Shareable_Components/Footer/Footer";
import DynamicHeading_Section from "../../Components/Shareable_Components/DynamicHeading_Section/DynamicHeading_Section";
import Breadcrumb_Section from "../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";
import AboutUs_Section from "./AboutUs_Components/AboutUs_Section/AboutUs_Section";
import HowIt_Work_Section from "./AboutUs_Components/Howit_Works_Section/HowIt_Work_Section";
import AboutUs_ProfileCard from "./AboutUs_Components/AboutUs_ProfileCard/AboutUs_ProfileCard";
import AboutUs_Mission_Vission from "./AboutUs_Components/AboutUs_Mission_Vission_Section/AboutUs_Mission_Vission";
import { useState } from "react";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";
const AboutUs = () => {
  const breadcrumbItems = [
    { text: "Home", href: "#", icon: "home" },
    {
      text: "About Us",
      href: "#",
      linkClasses:
        "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
      icon: "arrow",
    },
  ];
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
      <div
        className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${
          navfix ? "shadow-lg bg-white" : ""
        }`}
      >
        <NavBar />
      </div>
      <div className="mt-20">
        <div className="bg-cover bg-center bg-no-repeat bg-contact-us-img  bg-blend-multiply h-[25rem] mt-20 mb-1">
          <div className="container mx-auto ">
            <div className=" flex flex-col justify-start ">
              <DynamicHeading_Section />
              <Breadcrumb_Section items={breadcrumbItems} />
            </div>
          </div>
        </div>

        <div>
          <AboutUs_Section />
          <AboutUs_Mission_Vission />
          <HowIt_Work_Section />
          <div className='className=" flex justify-center  items-center  "'>
            <AboutUs_ProfileCard />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
