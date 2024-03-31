import DynamicHeading from "../../../../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Components/DynamicHeading";
import Breadcrumb_Section from "../../../../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";

const Project_Details_UpperPart = () => {
    const breadcrumbItems = [
      { text: "Home", href: "#", icon: "home" },
      {
        text: "Project",
        href: "/project",
        linkClasses:
          "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
        icon: "arrow",
      },
      {
        text: "Project Details",
        href: "#",
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
    </>
  );
}

export default Project_Details_UpperPart
