import DynamicHeading from "../../../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Components/DynamicHeading";
import Breadcrumb_Section from "../../../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section";


const Blog_Section_Upper_Part = () => {
    const breadcrumbItems = [
      { text: "Home", href: "#", icon: "home" },
      {
        text: "Blog",
        href: "#",
        linkClasses:
          "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
        icon: "arrow",
      },
      {
        text: "Blog Page",
        href: "#",
        linkClasses:
          "text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400",
        icon: "arrow",
      },
    ];
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat bg-hero-pattern  bg-blend-multiply h-[25rem] mt-20 mb-5">
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

export default Blog_Section_Upper_Part
