import { useState } from "react";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";
import Home_Main_Section from "./Home_Components/Home_Main_Section/Home_Main_Section";
import Service_Section from "./Home_Components/Service_Section/Service_Section";
import Faq from "./Home_Components/Faq_Section/Faq";
import Review_Section from "./Home_Components/Review_Section/Review_Section";
import Why_ChooseUs_Section from "./Home_Components/Why_ChooseUs_Section/Why_ChooseUs_Section";
import AboutUs_Section from "./Home_Components/AboutUs_Section/AboutUs_Section";
import Our_Product_Section from "./Home_Components/Our_Product_Section/Our_Product_Section";

const Home = () => {
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
      <Home_Main_Section/>
      <AboutUs_Section/>
      <Why_ChooseUs_Section/>
      
      <Service_Section/>
      <Our_Product_Section/>
      <Review_Section/>

      <Faq/>
    </>
  );
};

export default Home;
