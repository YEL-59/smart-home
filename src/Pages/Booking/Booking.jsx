import { useState } from "react";
import DynamicHeading from "../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Components/DynamicHeading";
import Breadcrumb_Section from "../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";
import Footer from "../../Components/Shareable_Components/Footer/Footer";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";
import Choose_Service_Section from "./Booking_Components/Choose_Service_Section/Choose_Service_Section";
import Home_Type_Section from "./Booking_Components/Home_Type_Section/Home_Type_Section";
import Summery_Booking_Section from "./Booking_Components/Summery_Booking_Section/Summery_Booking_Section";


const Booking = () => {
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
         text: "Booking",
         href: "#",
         linkClasses:
           "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
         icon: "arrow",
       },
      
     ];
  return (
    <>
      <section>
        <div
          className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${
            navfix ? "shadow-lg bg-white" : ""
          }`}
        >
          <NavBar />
        </div>
        <div className="bg-cover bg-center bg-no-repeat bg-contact-us-img  bg-blend-multiply h-[25rem] mt-20 mb-5">
          <div className="container mx-auto ">
            <div className=" flex flex-col justify-start ">
              <DynamicHeading />
              <Breadcrumb_Section items={breadcrumbItems} />
            </div>
          </div>
        </div>
        <Home_Type_Section />
        <Choose_Service_Section />
        <Summery_Booking_Section />
        <Footer />
      </section>
    </>
  );
}

export default Booking
