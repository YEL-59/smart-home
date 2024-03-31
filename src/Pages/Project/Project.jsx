import { useState } from "react";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";
import Project_Section_upperPart from "./Project_Components/Project_Section_UpperPart/Project_Section_upperPart"
import Project_card_Show_Section from "./Project_Components/Project_Crad_Show_Section/Project_card_Show_Section";


const Project = () => {
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
      <Project_Section_upperPart />
      <Project_card_Show_Section/>
    </>
  );
}

export default Project
