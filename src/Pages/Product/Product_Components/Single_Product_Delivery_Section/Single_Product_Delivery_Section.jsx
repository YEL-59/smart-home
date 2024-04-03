import { useState } from "react";
import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";


import Single_Product_Description from "../Single_Product_Description/Single_Product_Description";
import Single_Product_Review from "../Single_Product_Review/Single_Product_Review";

const Single_Product_Delivery_Section = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-[#DDFAFF] p-16 ">
      <div className="flex gap-2 ">
        <Secondary_Title_Section
          secondary_title={"Description"}
          onClick={() => handleTabClick("description")}
          active={activeTab === "description"}
        />
        <div className="border-l-4 border-black opacity-30"></div>
        <Secondary_Title_Section
          secondary_title={"Reviews"}
          onClick={() => handleTabClick("reviews")}
          active={activeTab === "reviews"}
        />
      </div>
      {activeTab === "description" && <Single_Product_Description />}
      {activeTab === "reviews" && <Single_Product_Review />}
    </section>
  );
};

export default Single_Product_Delivery_Section;
