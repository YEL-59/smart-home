import Single_Profile_Card from "./Aboutus_ProfileCard_Components/Single_Profile_Card/Single_Profile_Card"


const AboutUs_ProfileCard = () => {
  return (
   <>
   <section>
    <div>
        <div className="container mx-auto grid grid-cols-4 md:grid-cols-2 gap-5 mb-5">
            <Single_Profile_Card  imgSrc="https://data.artofproblemsolving.com/images/people/rlemon309x309.png"
      name="John Doe"
      title="Software Engineer"/>
      <Single_Profile_Card  imgSrc="https://data.artofproblemsolving.com/images/people/rlemon309x309.png"
      name="John Doe"
      title="Software Engineer"/>
      <Single_Profile_Card  imgSrc="https://data.artofproblemsolving.com/images/people/rlemon309x309.png"
      name="John Doe"
      title="Software Engineer"/>
        <Single_Profile_Card  imgSrc="https://data.artofproblemsolving.com/images/people/rlemon309x309.png"
      name="John Doe"
      title="Software Engineer"/>

        </div>
    </div>
   </section>
   </>
  )
}

export default AboutUs_ProfileCard