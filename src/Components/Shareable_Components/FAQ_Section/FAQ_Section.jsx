import { useState } from "react";
import Single_FAQ_Accordion from "./FAQ_Components/Single_FAQ_Accordion/Single_FAQ_Accordion";


const FAQ_Section = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      <section className="FAQ-section ">
        <div className=" lg:p-5">
          {/* <h1 className="title-font text-[#2c6777] text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mt-12 mb-12 text-center">
            Frequently Asked Questions
          </h1> */}
          <h2 className="text-2xl text-center  font-extrabold leading-10 tracking-tight text-gray-800  sm:leading-none md:text-5xl mt-10 mb-10">
            Frequently Asked
            <span className="font-bold text-[#2DBE61]"> Questions</span>
          </h2>
          <div className="container mx-auto">
            <div className="grid grid-cols-12  gap-4  p-2">
              {/* large div */}
              <div className="col-span-12 lg:col-span-12 mb-6 flex   lg:mb-0">
                <div>
                  <Single_FAQ_Accordion
                    title="What is multi-currency account & how does it work?"
                    content="Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content."
                    index={0}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Single_FAQ_Accordion
                    title="What is the best features & services we deliver?"
                    content="Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content."
                    index={1}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Single_FAQ_Accordion
                    title="What is multi-currency account & how does it work?"
                    content="Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content."
                    index={2}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Single_FAQ_Accordion
                    title="What is multi-currency account & how does it work?"
                    content="Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item's accordion body. Let's imagine this being filled with some actual content."
                    index={3}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                </div>
              </div>
              {/* right side small dev */}
              {/* <div className="col-span-12 lg:col-span-3">
                <div className=" w-auto  border border-gray-200 rounded-lg bg-cover bg-center bg-hero-pattern shadow  ">
                  <div className="p-3  py-16">
                    <div className="text-center  w-full">
                      <h1 className="title-font text-white text-[28px]  title-font font-me  mb-4">
                        Any Question
                      </h1>
                      <p className="  mx-auto  font-normal   mb-4 text-white ">
                        Do you have questions? We have answers. Check the most
                        frequently asked questions regarding Kick-Ass Seniors
                      </p>
                    </div>

                    <div className="flex justify-center ">
                      <a
                        href="#"
                        className=" bg-[#2c6777] text-white no-underline hover:bg-[#4e84d4] mt-2  px-9 py-2 rounded-md    text-[16px] font-[500]"
                      >
                        Ask Question
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section end */}
    </>
  );
}

export default FAQ_Section
