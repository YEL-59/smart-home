import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Service from './Pages/Service/Service';
import Service_Details from './Pages/Service/Service_Details/Service_Details';




function App() {


  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path='/service' element={<Service/>}/>
        <Route path="/service_details/:postId" element={<Service_Details />} />
      </Routes>
    </>
  )
}

export default App
