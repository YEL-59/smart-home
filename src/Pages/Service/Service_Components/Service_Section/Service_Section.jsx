import Single_Right_Service_Section from "./Single_Right_Service_Section/Single_Right_Service_Section";
import Single_left_Service_Section from "./Single_left_Service_Section/Single_left_Service_Section";


const Service_Section = () => {
  return (
    <>
      {/* using map for dynamic content  */}
      <section>
        <div className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
          <Single_left_Service_Section
            postId='111'
            service_section_header="1. Smart Home Installation."
            service_text_content="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letra"
            service_section_button_text="Read More"
          />
          <Single_Right_Service_Section
            postId="110"
            service_section_header="2. Home Security Integration"
            service_text_content="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letra"
            service_section_button_text="Read More"
          />
        </div>
      </section>
    </>
  );
};

export default Service_Section;
