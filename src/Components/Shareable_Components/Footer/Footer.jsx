import {
<<<<<<< HEAD
  BiLogoFacebookCircle,
  BiLogoTwitter,

  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";


import Single_SocialIcon from "./Footer_Components/Single_SocialIcon/Single_SocialIcon";
const Footer = () => {
  //this is important to show content in top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full  h-full  pb-5  text-white px-5 bg-[#000000] opacity-95  ">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className=" md:w-64 lg:w-[25rem] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              {/* <img src={FooterlogoImg} alt=" main logo" className=" " /> */}
              <p className="text-2xl text-blue-600 font-bold ">
                smart home people
              </p>
            </div>
            <p className="my-3 text-[16px] text-white mt-5 mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>

            <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-2">
              <Single_SocialIcon
                icon={<BiLogoFacebookCircle size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                alt="Facebook"
                link="https://facebook.com"
              />
              <Single_SocialIcon
                icon={<BiLogoTwitter size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/twitter.png"
                alt="Twitter"
                link="https://twitter.com"
              />
              <Single_SocialIcon
                icon={<BiLogoInstagramAlt size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                alt="Instagram"
                link="https://instagram.com"
              />
              <Single_SocialIcon
                icon={<BiLogoLinkedinSquare size={29} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
                alt="LinkedIn"
                link="https://linkedin.com"
              />
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-2/6 md:w-1/2 w-full px-6">
              <h2 className=" mb-[18px]  text-white text-[18px] font-bold select-none">
                Quick Links
              </h2>
              <nav className="list-none mb-5">
                <ul className="flex flex-col gap-1 text-white">
                  <a className="hover:underline" href="">
                    <li>Our Services</li>
                  </a>

                  <li>
                    <Link
                      to="/help"
=======
    BiLogoFacebookCircle,
    BiLogoTwitter,
  
    BiLogoInstagramAlt,
    BiLogoLinkedinSquare,
  } from "react-icons/bi";
  import { BsSendFill } from "react-icons/bs";
  import { motion } from "framer-motion";
  
  import { Link } from "react-router-dom";
  
  
  import Single_SocialIcon from "./Footer_Components/Single_SocialIcon/Single_SocialIcon";
  const Footer = () => {
    //this is important to show content in top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    return (
      <>
        <div className="w-full  h-full  pb-5  text-white px-5 bg-[#000000] opacity-95  ">
          <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className=" md:w-64 lg:w-[25rem] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                {/* <img src={FooterLogo} alt=" main logo" className=" h-20 " /> */}
                <h1>Footer LoGo img</h1>
              </div>
              {/* <p className="text-2xl text-blue-600 font-bold ">
                smart home people
              </p> */}
              <p className="my-3 text-[16px] text-white mt-5 mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </p>
              <p className="text-[16px] font-medium my-2 ">Connect With Us</p>
  
              <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-2">
                <Single_SocialIcon
                  icon={<BiLogoFacebookCircle size={30} />}
                  hoverIconSrc="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                  alt="Facebook"
                  link="https://facebook.com"
                />
                <Single_SocialIcon
                  icon={<BiLogoTwitter size={30} />}
                  hoverIconSrc="https://img.icons8.com/fluent/30/000000/twitter.png"
                  alt="Twitter"
                  link="https://twitter.com"
                />
                <Single_SocialIcon
                  icon={<BiLogoInstagramAlt size={30} />}
                  hoverIconSrc="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                  alt="Instagram"
                  link="https://instagram.com"
                />
                <Single_SocialIcon
                  icon={<BiLogoLinkedinSquare size={29} />}
                  hoverIconSrc="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
                  alt="LinkedIn"
                  link="https://linkedin.com"
                />
              </div>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-2/6 md:w-1/2 w-full px-6">
                <h2 className=" mb-[18px]  text-white text-[18px] font-bold select-none">
                  Company
                </h2>
                <nav className="list-none mb-5">
                  <ul className="flex flex-col gap-1 text-white">
                    {/* <a className="hover:underline" href="">
                      <li>Company</li>
                    </a> */}
  
                    {/* <li>
                      <Link
                        to="/help"
                        className="hover:underline"
                        onClick={scrollToTop}
                        href=""
                      >
                        {" "}
                        Help
                      </Link>
                    </li> */}
                    <Link
                      to="/aboutus"
>>>>>>> origin/homepage
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
<<<<<<< HEAD
                      {" "}
                      Help
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/privacy_policy"
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
                      {" "}
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms_and_condition"
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
                      {" "}
                      Terms and condition
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lagel_agreement"
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
                      {" "}
                      Lagel Agreement
                    </Link>
                  </li>

                  <Link
                    to="/aboutus"
                    className="hover:underline"
                    onClick={scrollToTop}
                    href=""
                  >
                    <li>About Us </li>
                  </Link>
                  <Link
                    to={"/blog"}
                    className="hover:underline"
                    onClick={scrollToTop}
                    href=""
                  >
                    <li>Blog</li>
                  </Link>

                  <Link to={'/project'} className="hover:underline" href="">
										<li>Project</li>
									</Link>
                </ul>
              </nav>
            </div>

            <div className="lg:w-2/6 md:w-1/2 w-full px-6">
              <Link to="/contact_us" className="font-bold text-lg ">
                Contact Us
              </Link>

              <nav className="list-none mt-3 mb-10">
                <ul className="flex flex-col gap-[10px] text-white">
                  <a className="hover:underline" href="#">
                    <li>(02) 9158 8497</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>info@krazyit.com</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>
                      Suite no - 25, 4th Floor, Bhuiyan Mansion, 6 Motijheel
                      C/A, Dhaka - 1000, Bangladesh
                    </li>
                  </a>
                </ul>
              </nav>
            </div>
            <div className="lg:w-2/6 md:w-1/2 w-full px-6">
              <h2 className="mb-[18px]  text-white text-[18px] font-bold select-none">
                Newsletter
              </h2>
              <nav className="list-none mb-10">
                <ul className="flex flex-col gap-[10px] text-white">
                  <p>
                    Subscribe to our newsletter to stay
                    <br /> up to date on everything Tutor2u
                  </p>

                  <div>
                    <form>
                      <label className="mb-2 text-sm font-medium text-white sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none"></div>
                        <input
                          type="email"
                          id="default-search"
                          className="block w-full p-2 pl-10 text-sm text-white border  rounded-lg bg-white "
                          placeholder="Email..."
                          required
                        />
                        <button
                          type="submit"
                          className=" absolute right-3.5 bottom-1.5 border-2 border-[#2c6777] rounded-full p-0.5"
                        >
                          <BsSendFill size={15} color="#2c6777" />
                        </button>
                      </div>
                    </form>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-500">
        <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col justify-between sm:flex-row">
          <p className="text-white  text-sm text-center font-bold sm:text-left">
            Copyright © 2023 smart home people ABN Number 20611064601
          </p>
          <p className="text-white  text-sm font-bold  ">
            Developed By{" "}
            <a
              href="https://krazyit.com/#"
              target="blank"
              className="hover:underline"
            >
              {" "}
              Krazyit
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
=======
                      <li>About Us </li>
                    </Link>
  
                    <li>
                      <Link
                        to="/service"
                        className="hover:underline"
                        onClick={scrollToTop}
                        href=""
                      >
                        {" "}
                        Our Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product"
                        className="hover:underline"
                        onClick={scrollToTop}
                        href=""
                      >
                        {" "}
                        Our Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lagel_agreement"
                        className="hover:underline"
                        onClick={scrollToTop}
                        href=""
                      >
                        {" "}
                        Lagel Agreement
                      </Link>
                    </li>
  
                    <Link
                      to={"/blog"}
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
                      <li>Blog</li>
                    </Link>
  
                    <Link className="hover:underline" to="/contact_us">
                      <li>Contact Us</li>
                    </Link>
                  </ul>
                </nav>
              </div>
  
              <div className="lg:w-2/6 md:w-1/2 w-full px-6">
                <Link to="/contact_us" className="font-bold text-lg ">
                  Resources
                </Link>
  
                <nav className="list-none mt-3 mb-10">
                  <ul className="flex flex-col gap-[10px] text-white">
                    <a className="hover:underline" href="#">
                      <li>Smart Home Guide</li>
                    </a>
                    <Link
                      to={"/project"}
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
                      <li>Project</li>
                    </Link>
                    <Link
                      to={"/blog"}
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
                      <li>Blog</li>
                    </Link>
                  </ul>
                </nav>
              </div>
              <div className="lg:w-2/6 md:w-1/2 w-full px-6">
                <h2 className="mb-[18px]  text-white text-[18px] font-bold select-none">
                  Help
                </h2>
                <nav className="list-none mb-10">
                  <ul className="flex flex-col gap-[10px] text-white">
                    <Link className="hover:underline" href="">
                      <li>Customer Support</li>
                    </Link>
                    <Link className="hover:underline" href="">
                      <li>Delivery Details</li>
                    </Link>
                    <Link
                      className="hover:underline"
                      onClick={scrollToTop}
                      to={"/terms_and_condition"}
                    >
                      <li>Terms & Conditions</li>
                    </Link>
                    <Link
                      to={"/privacy_policy"}
                      className="hover:underline"
                      onClick={scrollToTop}
                      href=""
                    >
                      <li>Privacy Policy</li>
                    </Link>
  
                    <div>
                      <form>
                        <label className="mb-2 text-sm font-medium text-white sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none"></div>
                          <input
                            type="email"
                            id="default-search"
                            className="block w-full p-2 pl-10 text-sm text-white border  rounded-lg bg-white "
                            placeholder="Email..."
                            required
                          />
                          <button
                            type="submit"
                            className=" absolute right-3.5 bottom-1.5 border-2 border-[#00ABE4] rounded-full p-0.5"
                          >
                            <BsSendFill size={15} color="#00ABE4" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black opacity-95">
          <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col justify-between sm:flex-row">
            <p className="text-white  text-sm text-center font-normal sm:text-left">
              Copyright © 2023 smart home people ABN Number 20611064601 
            </p>
            <p className="text-white  text-sm font-normal  ">
              Developed By{" "}
              <a
                href="https://github.com/yel-59"
                target="blank"
                className="hover:underline"
              >
                {" "}
                yel-59
              </a>
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
>>>>>>> origin/homepage
