import { motion } from 'framer-motion'

const Service_Section_Upperpart = () => {
  return (
   <>
   <div className="relative container flex flex-col justify-between items-center  mx-auto md:flex-row ">
          <div className="flex justify-between md:mb-16 md:py-5 max-w-2xl md:p-8 lg:p-0 ">
            <motion.div initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }} className="text-left">
                  <h2 className="text-xl font-extrabold leading-10 tracking-tight text-[#2DBE61] ">Our Service</h2>
              <h2
                className="text-2xl max-w-md lg:max-w-lg font-extrabold leading-10 tracking-tight text-gray-800  sm:leading-none md:text-4xl lg:text-5xl">
                Smart Home Services for 
                <span className="font-bold text-[#2DBE61] transition-all duration-1000 animate-pulse "> Modern Living</span>
              
              </h2>


            </motion.div>
          </div>
          <motion.div initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} className="text-left">
           
            <p className="max-w-md mx-auto  text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl">
            Our smart home automation products have left our clients delighted and satisfied! Experience the convenience and comfort they rave about today.
            </p>

          </motion.div>
        </div>
   
   </>
  )
}

export default Service_Section_Upperpart