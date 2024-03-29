import Footer from '../../Components/Shareable_Components/Footer/Footer'
import DynamicHeading_Section from '../../Components/Shareable_Components/DynamicHeading_Section/DynamicHeading_Section'
import Breadcrumb_Section from '../../Components/Shareable_Components/Breadcrumb_Section/Breadcrumb_Section'
import AboutUs_Section from './AboutUs_Components/AboutUs_Section/AboutUs_Section';
import HowIt_Work_Section from './AboutUs_Components/Howit_Works_Section/HowIt_Work_Section';
import AboutUs_ProfileCard from './AboutUs_Components/AboutUs_ProfileCard/AboutUs_ProfileCard';
const AboutUs = () => {
    const breadcrumbItems = [
        { text: "Home", href: "#", icon: "home" },
        {
            text: "Service",
            href: "#",
            linkClasses:
                "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
            icon: "arrow",
        },
        {
            text: "All Service",
            href: "#",
            linkClasses:
                "text-sm font-medium text-white hover:text-blue-600 md:ms-2 ",
            icon: "arrow",
        },
    ];
    return (
        <>
            <div className="mt-20">
                <div className="bg-cover bg-center bg-no-repeat bg-contact-us-img  bg-blend-multiply h-[25rem] mt-20 mb-1">
                    <div className="container mx-auto ">
                        <div className=" flex flex-col justify-start ">
                            <DynamicHeading_Section />
                            <Breadcrumb_Section items={breadcrumbItems} />
                        </div>
                    </div>
                </div>

                <div>
                    <AboutUs_Section/>
                    <HowIt_Work_Section/>
                    <AboutUs_ProfileCard/>
                </div>

                <Footer />
            </div>

        </>
    )
}

export default AboutUs