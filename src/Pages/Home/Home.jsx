import { useState } from "react";
import NavBar from "../../Components/Shareable_Components/NavBar/NavBar";
import Home_Main_Section from "./Home_Components/Home_Main_Section/Home_Main_Section";

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
    </>
  );
};

export default Home;
