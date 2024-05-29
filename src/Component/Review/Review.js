import React from "react";
import "./Review.css"
import pro1 from "../images/profile1.png"
import pro2 from "../images/profile2.jpg"
const Review=()=>{
    return(
        <div className="review">
            <div className="review-head">
                <h1>What are they say after using Vyaapaarseva</h1>
            </div>
            <div className="review-row">
                <div className="review-col">
                    <div className="review-card">
                    <p>Vyaapaarseva has been instrumental in the success of our company. Their team's in-depth knowledge of tax regulations and seamless registration processes have allowed us to focus on our core business operations without worrying about compliance issues. Highly recommended!</p>
                    <div className="review-pro-row">
                        <div className="review-pro">
                            <img src={pro1}/>
                        </div>
                        <div className="review-info">
                            <h3>EALIM NESA GIFTSON</h3>
                            <h2>Woodern walls</h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="review-col">
                    <div className="review-card">
                    <p>I am extremely pleased with the services provided by Vyaapaarseva. From company registration to GST filing, they have been our reliable partner. The team's professionalism and commitment to excellence make them the go-to choice for any business looking for comprehensive financial solutions.</p>
                    <div className="review-pro-row">
                        <div className="review-pro">
                            <img src={pro2}/>
                        </div>
                        <div className="review-info">
                            <h3>Dinesh</h3>
                            <h2>Graphic Design Agency</h2>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review