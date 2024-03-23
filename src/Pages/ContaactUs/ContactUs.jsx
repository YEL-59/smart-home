import { useState } from "react";
import Footer from "../../Components/Shareable_Components/Footer/Footer";
import ContactUs_Section from "./ContactUs_Components/ContactUs_Section/ContactUs_Section";
import Breadcrumb_Section from "../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";
import DynamicHeading_Section from "../../Components/Shareable_Components/DynamicHeading_Section/DynamicHeading_Section";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";


const ContactUs = () => {
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
        <div className="bg-cover bg-center bg-no-repeat bg-contact-us-img  bg-blend-multiply h-[25rem] mt-20 mb-5">
          <div className="container mx-auto ">
            <div className=" flex flex-col justify-start ">
              <DynamicHeading_Section />
              <Breadcrumb_Section items={breadcrumbItems} />
            </div>
          </div>
        </div>
       <ContactUs_Section/>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;