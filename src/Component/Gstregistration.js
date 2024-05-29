import React from "react";
import "./Gstregistration.css"
import { FaAngleRight } from "react-icons/fa";
const Gstregistration=()=>{
    
    return(
        <div >
            <div className="back">
                <div className="register-detail">
                <h1>GST REGISTRATION</h1>
                <p>Your growing business needs GST complianceRegistration and filing of GST can be done with expert assistance</p>
                </div>
                <div className="register-form">
                    <h1>Register Now</h1>
                    <form>
                    <label>Name :</label><br/>
                    <input type="text" placeholder="Enter your name"/>
                    <div>
                        <label>Email :</label><br/>
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div>
                        <label>Message :</label><br/>
                        <textarea placeholder="Message" rows="3"></textarea>
                    </div>
                    <div className="register-form-btn">
                        <button>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
            <div className="gst-details">
                
                <div className="gst-overview-details">
                <div className="gst-overview-info">
                    <h1>Overview of GST Registration Online in India</h1>
                    <p>Goods and Services Tax, or GST, is a tax levied on all products and services purchased in India. Taxation, value-added tax, and services tax are some indirect taxes replaced in India by the goods and services tax (GST), which is also an indirect tax. According to the Goods and Service Tax Act, which the Indian Government approved on March 29, 2017, the Goods and Service Tax (GST) has been in effect since July 1, 2017. As per GST jurisdiction, if you do business without GST registration, it is considered an offence.</p>
                </div>
                <div className="gst-overview-info">
                    
                    <h1>GST Registration Online in India or Goods and Service Tax - One Nation One Tax</h1>
                    <div className="gst-para-row">
                        <div className="gst-para-col">
                    <p>Being the biggest tax reform in India, GST is levied on goods and services. This includes both Central taxes (CST, Service Tax, Excise Duty) and State taxes (VAT, Entertainment Tax, Luxury Tax, Octroi). This will help the consumer to bear only GST charged by the last dealer in the chain of trade and supply. As per GST Regime, any company whose annual turnover is more than Rs.40 lakh is required to register as a normal taxable individual. However, there is an exclusion for hill states and the North East, where the annual turnover exceeds Rs.20 lakh for them.</p>
                    </div>
                    <div className="gst-para-col">
                    <p>As per GST Regime, any company whose annual turnover is more than Rs.40 lakh is required to register as a normal taxable individual. However, there is an exclusion for hill states and the North East, where the annual turnover exceeds Rs.20 lakh for them. Obtaining GST Registration in India is mandatory for all types of businesses whose turnover meets the above-mentioned criteria. If a business entity carries out any business activities without GST registration, it will be conceived as a punishable offense and the business and its owner will be liable to pay heavy penalties and legal issues.</p>
                    </div>
                    </div>
                </div>
                <div className="gst-overview-doc">
                    <h1>Mandatory Documents For Online GST Registration</h1>
                    <div className="gdt-overview-list">
                    <div className="gst-col">
                    <h2>Private Limited Company</h2>
                    <ul>
                        <li><FaAngleRight className="gst-icon"/> Certificate of Incorporation</li>
                        <li><FaAngleRight className="gst-icon"/> PAN Card of Company</li>
                        <li><FaAngleRight className="gst-icon"/> Articles of Association, AOA</li>
                        <li><FaAngleRight className="gst-icon"/> Resolution signed by board members</li>
                        <li><FaAngleRight className="gst-icon"/> Identity and address proof of directors</li>
                        <li><FaAngleRight className="gst-icon"/> Digital Signature</li>
                        <li><FaAngleRight className="gst-icon"/> Director's Proof</li>
                    </ul>
                    </div>
                    <div className="gst-col">
                    <h2>LLP</h2>
                    <ul>
                        <li><FaAngleRight className="gst-icon"/> PAN Card of LLP</li>
                        <li><FaAngleRight className="gst-icon" /> LLP Agreement</li>
                        <li><FaAngleRight className="gst-icon"/> Partner's names and address proof</li>
                        <li><FaAngleRight className="gst-icon"/> Director's Proof</li>
                    </ul>
                    </div>
                    <div className="gst-col">
                    <h2>Individual/Proprietorship</h2>
                    <ul>
                        <li><FaAngleRight className="gst-icon"/> PAN Card</li>
                        <li><FaAngleRight className="gst-icon"/> Address proof of proprietor</li>
                    </ul>
                    </div>
                    </div>
                </div>
                <div className="gst-overview-info">
                    <h1>Download GST Registration Certificate</h1>
                    <div className="gst-para-row"> 
                        <div className="gst-para-col">
                    <p>GST Certificate is issued to people who are registered under GST. Those are having GST registration certificate are mandatorily required to display the registration certificate prominently at their place of business. Downloading GST certificate is a pretty easy process through the GST Portal. Login to the GST Account and and go to User Services. In User Services, click on View / Download Certificate to download GST registration certificate.</p>
                    </div>
                    <div className="gst-para-col">
                    <p>Any person or entity that wishes to supply goods or services can obtain GST registration voluntarily, irrespective of business turnover. Voluntarily obtaining GST registration can help the business avail Input Tax Credit and also provide GST bill to customers.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Gstregistration