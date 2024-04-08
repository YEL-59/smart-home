import { useEffect, useState } from "react";
import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Global_Button_Section from "../../../../Components/Shareable_Components/Global_Buton_Section/Global_Button_Section";
import bookimg from '../../../../../public/images/Booking_Page_Images/bokingimg.png'
const Home_Type_Section = () => {
  const [homeData, setHomeData] = useState(null);
  const [selectedHomeType, setSelectedHomeType] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch(
          "../../../../../public/mockapi/BookingMokeData.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch home data");
        }
        const data = await response.json();
        setHomeData(data);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };

    fetchHomeData();
  }, []);

const handleButtonClick = (ht) => {
  console.log("Button clicked with text:", ht);
  setSelectedHomeType(ht);
};


  return (
    <>
      <section>
        <div className="flex justify-center mt-5 mb-10">
          <Secondary_Title_Section secondary_title={"Choose Your Home Type"} />
        </div>
        <div className="container mx-auto flex flex-wrap justify-between mt-5 mb-10">
          {homeData &&
            homeData.map((home, index) => (
              <Global_Button_Section
                key={index}
                button_text={home.type}
                onClick={() => handleButtonClick(home.type)}
              />
            ))}
        </div>
        <div>
          <img src={bookimg} className="h-full w-full container mx-auto" loading="lazy" decoding="async" alt="" />
          {selectedHomeType && (
            <img
              src={
                homeData.find((home) => home.type === selectedHomeType)
                  .imagePath
              }
              className="h-full w-full container mx-auto"
              loading="lazy"
              decoding="async"
              sizes="(max-width:800px)"
              alt=""
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Home_Type_Section;
