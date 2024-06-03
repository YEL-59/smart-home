import { FaDownload, FaFileSignature } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import '../../../../../src/App.css';
import AnimatedStatsCard from "./AnimatedStatsCard/AnimatedStatsCard";
const Statistics = () => {
  return (
    <>
       <div className="bg-gradient-to-t from-[#aed6e4] to-transparent rounded-lg">
        <div className="flex justify-center lg:justify-start items-center ">
          <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-3 gap-4 p-1 mb-4 mt-5 w-full">
            <div>
              <AnimatedStatsCard
                title="Download"
                value="400"
                icon={<FaDownload className="text-white" />}
              />
            </div>
            <div>
              {" "}
              <AnimatedStatsCard
                title="Feedback"
                value="500"
                icon={<FaFileSignature className="text-white" />}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              {/* <div className="box" flex justify-center items-center>
                <form name="search">
                  <input type="text" className="input "name="txt" />
                </form>
                <FiSearch className="icon" />
              </div> */}

              <form className="w-full mx-auto p-2  ">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-600 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search..."
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
