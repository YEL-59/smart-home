const Why_ChoosUs_Single_Card = ({ title, sort_description }) => {
    return (
      <>
        <section>
          <div className="grid gap-8 md:grid-cols-1 lg:gap-12 p-6 md:p-2 " >
            <a
              href="#"
              className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-4 lg:flex-row lg:space-y-0 lg:space-x-6"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-[#00ABE4] border border-[#00ABE4] rounded-lg shadow-inner lg:h-14 lg:w-14">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h5 className="mb-3 text-lg font-bold lg:text-xl">{title}</h5>
                  <p className="hover:underline text-blue-700">Read more...</p>
                </div>
                <p className="mb-6 text-lg text-gray-600">{sort_description}</p>
                {/* <span className="flex items-baseline text-lg font-bold text-indigo-600">
                  View price comparison
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span> */}
              </div>
            </a>
          </div>
        </section>
      </>
    );
  };
  
  export default Why_ChoosUs_Single_Card