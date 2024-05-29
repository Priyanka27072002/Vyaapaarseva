import React from "react";
import "./Footer.css"
import { FaRegCopyright } from "react-icons/fa6";
const Footer=()=>{
    return(
        <div className="foot">
        <div className="footer">
            <div className="footer-row">
                <div className="footer-col">
                    <h1>Vyaapaar<spans>seva</spans></h1>
                    <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document on meaningful content.</p>
                </div>
                <div className="footer-col2">
                <div className="footer-info">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-info">
                    <h2>LEGAL</h2>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-info">
                    <h2>Contact US</h2>
                    <ul>
                        <li>Email : Vyaapaarseva@gmail.com</li>
                        <li>Address : Level 7, IIFL TOWERS, 143, MGR Main Rd, Kandhanchavadi, Perungudi, Chennai, TamilNadu-600096</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="footer-copy">
                <p><FaRegCopyright /> 2024 All rights reserved</p>
            </div>
        </div>
        </div>
    )
}
export default Footer