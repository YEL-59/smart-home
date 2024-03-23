import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';



function App() {


  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
