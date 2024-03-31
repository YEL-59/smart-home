import DynamicHeading from "../../../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Components/DynamicHeading";
import Breadcrumb_Section from "../../../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";
import Main_Title_Section from "../../../../Components/Shareable_Components/Main_Title_Section/Main_Title_Section";



const Project_Section_upperPart = () => {
    const breadcrumbItems = [
      { text: "Home", href: "/", icon: "home" },
      {
        text: "Project",
        href: "/project",
        linkClasses:
          "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
        icon: "arrow",
      },
      
    ];
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat bg-contact-us-img  bg-blend-multiply h-[25rem] mt-20 mb-5">
        <div className="container mx-auto ">
          <div className=" flex flex-col justify-start ">
            <DynamicHeading />
            <Breadcrumb_Section items={breadcrumbItems} />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-20 mb-20">
         
          <Main_Title_Section main_title={"Lets See Our Lates Project"} />
        </div>
      </div>
    </>
  );
}

export default Project_Section_upperPart

