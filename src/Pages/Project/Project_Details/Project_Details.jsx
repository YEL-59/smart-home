import { useState } from "react";
import Project_Content_Section from "./Project_Details_Components/Project_Content_Section/Project_Content_Section"
import Project_Details_Banner from "./Project_Details_Components/Project_Details_Banner/Project_Details_Banner"
import Project_Details_UpperPart from "./Project_Details_Components/Project_Details_UpperPart/Project_Details_UpperPart"
import NavBar from "../../../Components/Shareable_Components/NavBar/NavBar";


const Project_Details = () => {
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
      <Project_Details_UpperPart />
      <Project_Details_Banner />
      <Project_Content_Section />
    </>
  );
}

export default Project_Details
