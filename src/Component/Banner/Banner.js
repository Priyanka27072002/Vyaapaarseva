import React from "react";
import "./Banner.css"
import home from "../images/home.png"
import About from "../About/About";
import Services from "../Services/Services";
import Review from "../Review/Review";
const Banner=()=>{
    return(
        <div>
        <div className="banner">
            <div className="banner-intro">
                <h3>Welcome Vyaapaarseva</h3>
                <h1>Your Trusted Partner for GST Registration and Auditing Services</h1>
                <div className="banner-btn">
                    <a href="#">Enquire Now</a>
                </div>
            </div>
            <div className="banner-image">
                <img src={home}/> 
            </div>
        </div>
        <About/>
        <Services/>
        <Review/>
    
        </div>
    )
}
export default Banner