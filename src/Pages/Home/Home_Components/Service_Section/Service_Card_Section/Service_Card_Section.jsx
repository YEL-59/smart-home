import Service_Single_Card from "./Service_Single_Card/Service_Single_Card"


const Service_Card_Section = () => {
  return (
    <>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 mb-4 mt-5 w-full">
<Service_Single_Card title='Smart Home Installation' body_text='Installation of smart devices, including thermostats, lighting systems, and entertainment systems, ensuring they are properly configured and integrated into your home network.' src_link='../../../../../../public/images/Home_Page_Images/service-img/service_card-1.avif' />
<Service_Single_Card title='Smart Home Installation' body_text='Installation of smart devices, including thermostats, lighting systems, and entertainment systems, ensuring they are properly configured and integrated into your home network.' src_link='../../../../../../public/images/Home_Page_Images/service-img/service_card-2.avif' />
<Service_Single_Card title='Smart Home Installation' body_text='Installation of smart devices, including thermostats, lighting systems, and entertainment systems, ensuring they are properly configured and integrated into your home network.' src_link='../../../../../../public/images/Home_Page_Images/service-img/service_card-3.avif' />
 
      </div> <div className="flex justify-center">
  <button className=" border px-9 py-2 rounded bg-green-400 text-white font-bold mx-auto ">See more</button>
  </div></>
    
  )
}

export default Service_Card_Section