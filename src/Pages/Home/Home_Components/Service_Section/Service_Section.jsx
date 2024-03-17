
import Service_Card_Section from "./Service_Card_Section/Service_Card_Section"
import Service_Section_Upperpart from "./Service_Section_Upperpart/Service_Section_Upperpart"


const Service_Section = () => {
  return (
    <>
    <div>
        <section className=" px-4 space-y-6 bg-[#DCF3FB] py-8 md:py-12 lg:py-20">
        <Service_Section_Upperpart/>
        <Service_Card_Section/>
        </section>
    </div>
    </>

  )
}

export default Service_Section