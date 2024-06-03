import { useState, useEffect } from 'react';

const AnimatedStatsCard = ({ title, value, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount(count + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count, value]);

  return (
    <div className=" w-full bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-4">
      <div className="flex lg:flex-col xl:flex-row justify-center items-center">
        {/* <div className="p-3 bg-[#00ABE4] rounded-full shadow-lg">{icon}</div> */}
        <div>
          <p className="text-gray-600 text-3xl text-center font-bold">
            {count} +{" "}
          </p>
          <h2 className="text-md font-bold text-gray-800">{title}</h2>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AnimatedStatsCard;