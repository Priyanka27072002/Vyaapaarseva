import React from "react";
import about from "../images/about.jpg"
import "./About.css"
const About=()=>{
    return(
        <div id="About">
        <div className="about">
            <h1>ABOUT US</h1>
                <div className="about-us">
                <div className="about-us-details">
                    <h3>At Vyaapaarseva, we take pride in being a dynamic and client-centric company that stands as your reliable companion on the journey of business success. Established with a vision to provide comprehensive financial and compliance solutions, we specialize in GST registration, company registration, and income tax filing services, catering to businesses across India.</h3>
                    <div className="about-btn">
                        <a href="#">Learn More</a>
                    </div> 
                </div>
                <div className="about-image">
                    <img src={about}/>
                </div>
            </div>
        </div>
        </div>
    )
}
export default About