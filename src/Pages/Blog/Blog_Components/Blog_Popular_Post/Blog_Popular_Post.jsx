
import Secondary_Title_Section from "../../../../Components/Shareable_Components/Secondary_Title_Section/Secondary_Title_Section";
import Single_Blog_post_card from "../Blog_card_Post_Component/Single_Blog_post_card";

import card1 from "/public/images/blog_Page_Images/Popular_Post_Images/popularpost_img-1.png";
import card2 from "/public/images/blog_Page_Images/Popular_Post_Images/popularpost_img-2.png";
const Blog_Popular_Post = () => {
  return (
    <>
      <section>
        <div>
          <div className="Blog-title-section container mx-auto">
            <div className="flex justify-between mb-5 mt-5">
              <div>
                <Secondary_Title_Section secondary_title={"Popular Post"} />
              </div>
              <div>
                <p className="underline text-blue-500 transition-transform duration-100 hover:scale-105">
                  read more
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-2 justify-center items-center gap-5">
            <div>
              <Single_Blog_post_card
                imageUrl={card1}
                title="Exercises"
                description="Create Exercises for any subject with the topics you and your students care about."
                buttonText="Start Reading"
                tag="Technology"
                date="22-22-24"
                postId="123"
              />
            </div>
            <div>
              <Single_Blog_post_card
                imageUrl={card2}
                title="Exercises"
                description="Create Exercises for any subject with the topics you and your students care about."
                buttonText="Start Reading"
                tag="Technology"
                date="22-22-24"
                postId="124"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog_Popular_Post;
