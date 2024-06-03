import Single_Profile_Card from "./Aboutus_ProfileCard_Components/Single_Profile_Card/Single_Profile_Card"


const AboutUs_ProfileCard = () => {
  return (
   <>
     <section>
        <div className=" text-[35px] text-[#00ABE4] font-bold text-center my-10">Our Team</div>
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            <Single_Profile_Card
              imgSrc="https://data.artofproblemsolving.com/images/people/rlemon309x309.png"
              name="John Doe"
              title="Software Engineer"
              facebookUrl="https://www.facebook.com/"
              instagramUrl="https://www.instagram.com/"
              linkedinUrl="https://www.linkedin.com/in/"
            />
            <Single_Profile_Card
              imgSrc="https://data.artofproblemsolving.com/images/people/rlemon309x309.png"
              name="John Doe"
              title="Software Engineer"
            />
            <Single_Profile_Card
              imgSrc="https://data.artofproblemsolving.com/images/people/rlemon309x309.png"
              name="John Doe"
              title="Software Engineer"
            />
            <Single_Profile_Card
              imgSrc="https://data.artofproblemsolving.com/images/people/rlemon309x309.png"
              name="John Doe"
              title="Software Engineer"
            />
          </div>
        </div>
      </section>
   </>
  )
}

export default AboutUs_ProfileCard