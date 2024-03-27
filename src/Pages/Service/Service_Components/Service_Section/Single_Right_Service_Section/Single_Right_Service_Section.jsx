import { Link } from "react-router-dom";
import Card_title_Section from "../../../../../Components/Shareable_Components/Card_title_Section/Card_title_Section";
import Text_Content_Section from "../../../../../Components/Shareable_Components/Text_Content_Section/Text_Content_Section";
import Global_Button_Section from "../../../../../Components/Shareable_Components/Global_Button_Section/Global_Button_Section";



const Single_Right_Service_Section = ({
  service_text_content,
  service_section_header,
  service_section_button_text,
  postId,
}) => {
  return (
    <>
      <section>
        <Link to={`/service_details/${postId}`}>
          {" "}
          <div className=" xl:w-[90%] sm:w-[85%] xs:w-[90%] mx-auto flex  flex-col lg:flex-row  lg:gap-4 xs:gap-2 justify-center lg:items-center md:items-center mt-4 p-2 md:p-0">
            <div className="lg:w-[50%] sm:w-full xs:w-full  dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md ">
              <Card_title_Section card_title={service_section_header} />

              <p className="text-lg mt-4 mb-4 max-w-2xl leading-10">
                <Text_Content_Section text_content={service_text_content} />
              </p>
              <Global_Button_Section
                button_text={service_section_button_text}
              />
            </div>

            <div className=" lg:w-[40%] xs:w-full">
              <img
                className="rounded-[2rem]"
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="billboard image"
              />
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Single_Right_Service_Section
