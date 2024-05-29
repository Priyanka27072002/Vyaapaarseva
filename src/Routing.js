import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Nav from "./Component/Nav"
import Footer from "./Component/Footer/Footer"
import Banner from "./Component/Banner/Banner"
import Gstregistration from "./Component/Gstregistration"
import Contact from "./Component/Contact/Contact"
import Tax from "./Component/Tax/Tax"
const Routing=()=>{
    return(
        <BrowserRouter>
         <Nav/>
        <Routes>
           <Route path="/" element={<Banner/>}/>
           <Route path="/gsd" element={<Gstregistration/>}/>
           <Route path="/tax" element={<Tax/>}/>
           <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing