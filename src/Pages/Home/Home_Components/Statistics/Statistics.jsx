import { FaDownload, FaFileSignature } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import '../../../../../src/App.css';
import AnimatedStatsCard from "./AnimatedStatsCard/AnimatedStatsCard";
const Statistics = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-[#cdffdb] to-transparent rounded-lg">
        <div className="flex justify-center lg:justify-start items-center ">
          <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-3 gap-4 mb-4 mt-5 w-full">
           <div >
           <AnimatedStatsCard
              title="Download"
              value="1000"
              icon={<FaDownload className="text-white" />}
            />
           </div>
           <div> <AnimatedStatsCard
              title="Feedback"
              value="500"
              icon={<FaFileSignature className="text-white" />}
            /></div>
            <div>
              <div className="box">
                <form name="search">
                  <input
                    type="text"
                    className="input"
                    name="txt"
                   
                  />
                </form>
                <FiSearch className="icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
