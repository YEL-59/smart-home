import { useState } from "react";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";
import Service_Section from "./Service_Components/Service_Section/Service_Section";
import FAQ_Section from "../../Components/Shareable_Components/FAQ_Section/FAQ_Section";
import Footer from "../../Components/Shareable_Components/Footer/Footer";
import Breadcrumb_Section from "../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";
import DynamicHeading from "../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Components/DynamicHeading";

const Service = () => {
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
      <div className="mt-20">
        <div className="bg-cover bg-center bg-no-repeat bg-hero-pattern  bg-blend-multiply h-[25rem]  mb-5">
          <div className="container mx-auto ">
            <div className=" flex flex-col justify-start ">
              <DynamicHeading />
              <Breadcrumb_Section items={breadcrumbItems} />
            </div>
          </div>
        </div>
        <Service_Section />
        <FAQ_Section />
        <Footer />
      </div>
    </>
  );
};

export default Service;
