import React from "react";
import "./Services.css"
import gst from "../images/gst.png"
import reg from "../images/registration.jpg"
import tax from "../images/tax.jpg"
import { SiExpedia } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";
const  Services=()=>{
    return(
        <div>
        <div className="servies">
            <h1>OUR SERVICES</h1>
            <div className="service-details">
                <div className="gst-service">
                    <div className="gst-service-detail">
                    <h2>GST REGISTRATION</h2>
                    <p>Ensure compliance with Goods and Services Tax regulations with our efficient GST registration services. We guide you through the process, making it hassle-free and ensuring that your business stays on the right side of the law.</p>
                    </div>
                    <div className="gst-image">
                        <img src={gst}/>
                    </div>
                </div>
                <div className="gst-service">
                <div className="gst-service-detail">
                    <h2>COMPANY REGISTRATION</h2>
                    <p>Embark on your entrepreneurial journey with confidence by entrusting us with your company registration. Our experts streamline the registration process, providing you with the necessary legal foundation to build your business.</p>
                    </div>
                    <div className="gst-image">
                        <img src={reg}/>
                    </div>
                </div>
                <div className="gst-service">
                <div className="gst-service-detail">
                    <h2>INCOME TAX FILLING</h2>
                    <p>Simplify the income tax filing process with our comprehensive services. We assist individuals and businesses in meeting their tax obligations while maximizing available exemptions and deductions.</p>
                    </div>
                    <div className="gst-image">
                        <img src={tax}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-row">
                <div className="card-col">
                    <div className="card-card">
                    <div className="card-icons">
                        <div className="border">
                        <SiExpedia className="icon"/>
                        </div>
                        
                    </div>
                    <div className="card-info">
                        <h2>Professional Expertise</h2>
                        <p>Tap into our extensive professional expertise to navigate the complexities of your business needs and ensure success with confidence</p>
                    </div>
                    </div>
                </div>
                <div className="card-col">
                    <div>
                    <div className="card-icons">
                        <div className="border">
                        <FaTools className="icon"/>
                        </div>
                        
                    </div>
                    <div className="card-info">
                        <h2>Timely Service</h2>
                        <p>Experience our commitment to punctuality, ensuring your needs are met with precision and efficiency through our prompt and reliable services</p>
                    </div>
                    </div>
                </div>
                <div className="card-col">
                    <div >
                    <div className="card-icons">
                        <div className="border">
                            <MdEmojiTransportation className="icon"/>
                        </div>
                        
                    </div>
                    <div className="card-info">
                        <h2>Transparent Processes</h2>
                        <p>Elevate your business confidence through our commitment to transparent processes, ensuring clarity and trust in every step of our services</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Services